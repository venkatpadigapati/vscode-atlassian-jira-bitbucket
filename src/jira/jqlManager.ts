import PQueue from 'p-queue/dist';
import { v4 } from 'uuid';
import { ConfigurationChangeEvent, ConfigurationTarget, Disposable, Event, EventEmitter } from 'vscode';
import { DetailedSiteInfo, ProductJira } from '../atlclients/authInfo';
import { configuration } from '../config/configuration';
import { JQLEntry } from '../config/model';
import { Container } from '../container';
import { Logger } from '../logger';

export type JQLUpdateEvent = {
    jqlEntries: JQLEntry[];
};

export class JQLManager extends Disposable {
    private _disposable: Disposable;
    private _queue = new PQueue({ concurrency: 1 });

    private _onDidJQLChange = new EventEmitter<JQLUpdateEvent>();
    public get onDidJQLChange(): Event<JQLUpdateEvent> {
        return this._onDidJQLChange.event;
    }

    constructor() {
        super(() => this.dispose());

        this._disposable = Disposable.from(configuration.onDidChange(this.onConfigurationChanged, this));
    }

    dispose() {
        this._disposable.dispose();
        this._onDidJQLChange.dispose();
    }

    public async updateFilters() {
        this._queue.add(async () => {
            const allList = Container.config.jira.jqlList;
            if (!allList) {
                return;
            }

            const filterList = allList.filter((item) => item.filterId);

            await Promise.all(
                filterList.map(async (f) => {
                    const site = Container.siteManager.getSiteForId(ProductJira, f.siteId);
                    if (site) {
                        try {
                            const client = await Container.clientManager.jiraClient(site);
                            const updatedFilter = await client.getFilter(f.filterId!);
                            if (updatedFilter) {
                                const originalFilter = allList.find((of) => of.id === f.id);
                                if (originalFilter) {
                                    originalFilter.name = updatedFilter.name;
                                    originalFilter.query = updatedFilter.jql;
                                }
                            }
                        } catch (e) {
                            Logger.error(e, `Error fetching filter "${f.name}"`);
                        }
                    }
                })
            );

            configuration.updateEffective('jira.jqlList', allList);
        });
    }

    public notifiableJQLEntries(): JQLEntry[] {
        return Container.config.jira.jqlList.filter((entry) => entry.enabled && entry.monitor);
    }

    public enabledJQLEntries(): JQLEntry[] {
        return Container.config.jira.jqlList.filter((entry) => entry.enabled);
    }

    public async initializeJQL(sites: DetailedSiteInfo[]) {
        this._queue.add(async () => {
            const allList = Container.config.jira.jqlList;

            for (const site of sites) {
                if (!allList.some((j) => j.siteId === site.id)) {
                    // only initialize if there are no jql entries for this site
                    const newEntry = await this.defaultJQLForSite(site);
                    allList.push(newEntry);
                }
            }

            await configuration.update('jira.jqlList', allList, ConfigurationTarget.Global);
        });
    }

    async defaultJQLForSite(site: DetailedSiteInfo): Promise<JQLEntry> {
        const client = await Container.clientManager.jiraClient(site);

        const fields = await client.getFields();
        const resolutionEnabled = fields.some((f) => f.id === 'resolution');
        const resolutionClause = resolutionEnabled ? 'AND resolution = Unresolved ' : '';

        const query = `assignee = currentUser() ${resolutionClause}ORDER BY lastViewed DESC`;

        return {
            id: v4(),
            enabled: true,
            name: `My ${site.name} Issues`,
            query: query,
            siteId: site.id,
            monitor: true,
        };
    }

    public async removeJQLForSiteWithId(siteId: string) {
        this._queue.add(async () => {
            let allList = Container.config.jira.jqlList;

            allList = allList.filter((j) => j.siteId !== siteId);

            await configuration.updateEffective('jira.jqlList', allList);
        });
    }

    private onConfigurationChanged(e: ConfigurationChangeEvent) {
        if (configuration.changed(e, 'jira.filterList')) {
            this.updateFilters();
        }
    }
}
