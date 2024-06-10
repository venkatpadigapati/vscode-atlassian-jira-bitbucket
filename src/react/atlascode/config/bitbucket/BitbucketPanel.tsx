import { ConfigSection, ConfigSubSection } from '../../../../lib/ipc/models/config';
import { Fade, Grid } from '@material-ui/core';

import { AuthPanel } from '../auth/AuthPanel';
import { BitbucketIssuesPanel } from './subpanels/BitbucketIssuesPanel';
import { CommonPanelProps } from '../../common/commonPanelProps';
import { ContextMenuPanel } from './subpanels/ContextMenuPanel';
import { PRExplorerPanel } from './subpanels/PRExplorerPanel';
import { PipelinesPanel } from './subpanels/PipelinesPanel';
import { PreferredRemotesPanel } from './subpanels/PreferredRemotesPanel';
import { ProductBitbucket } from '../../../../atlclients/authInfo';
import React from 'react';
import { SiteWithAuthInfo } from '../../../../lib/ipc/toUI/config';
import { StatusBarPanel } from '../../common/StatusBarPanel';

type BitbucketPanelProps = CommonPanelProps & {
    config: { [key: string]: any };
    sites: SiteWithAuthInfo[];
    isRemote: boolean;
    onSubsectionChange: (subSection: ConfigSubSection, expanded: boolean) => void;
};

export const BitbucketPanel: React.FunctionComponent<BitbucketPanelProps> = ({
    visible,
    selectedSubSections,
    onSubsectionChange,
    config,
    sites,
    isRemote,
}) => {
    return (
        <>
            <Fade in={visible}>
                <div hidden={!visible || config['bitbucket.enabled']}>Enable Bitbucket features to see settings</div>
            </Fade>

            <Fade in={visible}>
                <div hidden={!visible || !config['bitbucket.enabled']} role="tabpanel">
                    <Grid container spacing={3} direction="column">
                        <Grid item>
                            <AuthPanel
                                visible={visible}
                                expanded={selectedSubSections.includes(ConfigSubSection.Auth)}
                                onSubsectionChange={onSubsectionChange}
                                isRemote={isRemote}
                                sites={sites}
                                product={ProductBitbucket}
                                section={ConfigSection.Bitbucket}
                            />
                        </Grid>
                        <Grid item>
                            <PRExplorerPanel
                                visible={visible}
                                expanded={selectedSubSections.includes(ConfigSubSection.PR)}
                                onSubsectionChange={onSubsectionChange}
                                enabled={config[`${ConfigSection.Bitbucket}.explorer.enabled`]}
                                relatedJiraIssues={
                                    config[`${ConfigSection.Bitbucket}.explorer.relatedJiraIssues.enabled`]
                                }
                                relatedBitbucketIssues={
                                    config[`${ConfigSection.Bitbucket}.explorer.relatedBitbucketIssues.enabled`]
                                }
                                pullRequestCreated={
                                    config[`${ConfigSection.Bitbucket}.explorer.notifications.pullRequestCreated`]
                                }
                                nestFiles={config[`${ConfigSection.Bitbucket}.explorer.nestFilesEnabled`]}
                                refreshInterval={config[`${ConfigSection.Bitbucket}.explorer.refreshInterval`]}
                            />
                        </Grid>
                        <Grid item>
                            <PipelinesPanel
                                visible={visible}
                                expanded={selectedSubSections.includes(ConfigSubSection.Pipelines)}
                                onSubsectionChange={onSubsectionChange}
                                enabled={config[`${ConfigSection.Bitbucket}.pipelines.explorerEnabled`]}
                                hideEmpty={config[`${ConfigSection.Bitbucket}.pipelines.hideEmpty`]}
                                hideFiltered={config[`${ConfigSection.Bitbucket}.pipelines.hideFiltered`]}
                                monitorEnabled={config[`${ConfigSection.Bitbucket}.pipelines.monitorEnabled`]}
                                filters={config[`${ConfigSection.Bitbucket}.pipelines.branchFilters`]}
                                refreshInterval={config[`${ConfigSection.Bitbucket}.pipelines.refreshInterval`]}
                            />
                        </Grid>
                        <Grid item>
                            <BitbucketIssuesPanel
                                visible={visible}
                                expanded={selectedSubSections.includes(ConfigSubSection.Issues)}
                                onSubsectionChange={onSubsectionChange}
                                enabled={config[`${ConfigSection.Bitbucket}.issues.explorerEnabled`]}
                                notifications={config[`${ConfigSection.Bitbucket}.issues.monitorEnabled`]}
                                jiraButton={config[`${ConfigSection.Bitbucket}.issues.createJiraEnabled`]}
                                refreshInterval={config[`${ConfigSection.Bitbucket}.issues.refreshInterval`]}
                            />
                        </Grid>
                        <Grid item>
                            <PreferredRemotesPanel
                                visible={visible}
                                expanded={selectedSubSections.includes(ConfigSubSection.PreferredRemotes)}
                                onSubsectionChange={onSubsectionChange}
                                preferredRemotes={config[`${ConfigSection.Bitbucket}.preferredRemotes`]}
                            />
                        </Grid>
                        <Grid item>
                            <ContextMenuPanel
                                visible={visible}
                                expanded={selectedSubSections.includes(ConfigSubSection.ContextMenus)}
                                onSubsectionChange={onSubsectionChange}
                                enabled={config[`${ConfigSection.Bitbucket}.contextMenus.enabled`]}
                            />
                        </Grid>
                        <Grid item>
                            <StatusBarPanel
                                visible={visible}
                                expanded={selectedSubSections.includes(ConfigSubSection.Status)}
                                onSubsectionChange={onSubsectionChange}
                                configSection={ConfigSection.Bitbucket}
                                productName={ProductBitbucket.name}
                                enabled={config[`${ConfigSection.Bitbucket}.statusbar.enabled`]}
                                showProduct={config[`${ConfigSection.Bitbucket}.statusbar.showProduct`]}
                                showUser={config[`${ConfigSection.Bitbucket}.statusbar.showUser`]}
                                showLogin={config[`${ConfigSection.Bitbucket}.statusbar.showLogin`]}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Fade>
        </>
    );
};
