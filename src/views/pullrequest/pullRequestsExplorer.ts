import path from 'path';
import { commands, ConfigurationChangeEvent, QuickPickItem, window } from 'vscode';
import { BitbucketContext } from '../../bitbucket/bbContext';
import { PullRequest, WorkspaceRepo } from '../../bitbucket/model';
import { Commands } from '../../commands';
import { configuration } from '../../config/configuration';
import { CommandContext, PullRequestTreeViewId, setCommandContext } from '../../constants';
import { Container } from '../../container';
import { BitbucketExplorer } from '../BitbucketExplorer';
import { BaseTreeDataProvider } from '../Explorer';
import { PullRequestNodeDataProvider } from '../pullRequestNodeDataProvider';
import { PullRequestCreatedMonitor } from './pullRequestCreatedMonitor';

export class PullRequestsExplorer extends BitbucketExplorer {
    constructor(ctx: BitbucketContext) {
        super(ctx);

        Container.context.subscriptions.push(
            commands.registerCommand(Commands.BitbucketRefreshPullRequests, () => this.refresh()),
            commands.registerCommand(Commands.BitbucketToggleFileNesting, () => this.toggleFileNesting()),
            commands.registerCommand(Commands.BitbucketShowPullRequestDetails, async (pr: PullRequest) => {
                await Container.pullRequestDetailsWebviewFactory.createOrShow(pr.data.url, pr);
            }),
            commands.registerCommand(Commands.CreatePullRequest, () => this.pickRepoAndShowCreatePR())
        );
    }

    private pickRepoAndShowCreatePR(): void {
        const options: (QuickPickItem & {
            value: WorkspaceRepo;
        })[] = Container.bitbucketContext
            .getBitbucketRepositories()
            .map((repo) => ({ label: path.basename(repo.rootUri), value: repo }));

        if (options.length === 1) {
            Container.createPullRequestWebviewFactory.createOrShow(options[0].value);
            return;
        }

        const picker = window.createQuickPick<QuickPickItem & { value: WorkspaceRepo }>();
        picker.items = options;
        picker.title = 'Create pull request';
        picker.placeholder =
            options.length > 0 ? 'Pick a repository' : 'No Bitbucket repositories found in this workspace';

        picker.onDidAccept(() => {
            if (picker.selectedItems.length > 0) {
                Container.createPullRequestWebviewFactory.createOrShow(picker.selectedItems[0].value);
            }
            picker.hide();
        });

        picker.show();
    }

    viewId(): string {
        return PullRequestTreeViewId;
    }

    explorerEnabledConfiguration(): string {
        return 'bitbucket.explorer.enabled';
    }

    monitorEnabledConfiguration(): string {
        return 'bitbucket.explorer.notifications.pullRequestCreated';
    }

    refreshConfiguration(): string {
        return 'bitbucket.explorer.refreshInterval';
    }

    newTreeDataProvider(): BaseTreeDataProvider {
        return new PullRequestNodeDataProvider(this.ctx);
    }

    newMonitor(): BitbucketActivityMonitor {
        return new PullRequestCreatedMonitor(this.ctx);
    }

    onConfigurationChanged(e: ConfigurationChangeEvent) {
        const initializing = configuration.initializing(e);

        if (initializing || configuration.changed(e, 'bitbucket.explorer.enabled')) {
            setCommandContext(CommandContext.BitbucketExplorer, Container.config.bitbucket.explorer.enabled);
        }
    }

    toggleFileNesting() {
        const isEnabled = configuration.get<boolean>('bitbucket.explorer.nestFilesEnabled');
        configuration.updateEffective('bitbucket.explorer.nestFilesEnabled', !isEnabled, null);
        this.refresh();
    }
}
