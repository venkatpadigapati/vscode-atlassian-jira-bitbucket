import { commands } from 'vscode';

export const extensionId = 'atlascode';
export const extensionOutputChannelName = 'Atlassian';
export const JiraLegacyWorkingSiteConfigurationKey = 'jira.workingSite';
export const JiraCreateSiteAndProjectKey = 'jira.lastCreateSiteAndProject';
export const JiraV1WorkingProjectConfigurationKey = 'jira.workingProject';
export const JiraEnabledKey = 'jira.enabled';
export const BitbucketEnabledKey = 'bitbucket.enabled';
export const OldJQLKey = 'jira.customJql';
export const JiraJQLListKey = 'jira.jqlList';
export const JiraHoverProviderConfigurationKey = 'jira.hover.enabled';
export const BitbucketRelatedIssuesConfigurationKey = 'bitbucket.explorer.relatedJiraIssues.enabled';
export const BitbucketContextMenusConfigurationKey = 'bitbucket.contextMenus.enabled';
export const CustomJQLTreeId = 'atlascode.views.jira.customJql';
export const PullRequestTreeViewId = 'atlascode.views.bb.pullrequestsTreeView';
export const PipelinesTreeViewId = 'atlascode.views.bb.pipelinesTreeView';
export const BitbucketIssuesTreeViewId = 'atlascode.views.bb.issuesTreeView';
export const HelpTreeViewId = 'atlascode.views.helpTreeView';
export const GlobalStateVersionKey = 'atlascodeVersion';
export const AxiosUserAgent = 'atlascode/2.x axios/0.19.2';

export const bbAPIConnectivityError = new Error('cannot connect to bitbucket api');
export const jiraAPIConnectivityError = new Error('cannot connect to jira api');
export const cannotGetClientFor = 'cannot get client for';

export const AuthInfoVersionKey = 'authInfoVersion';

export enum CommandContext {
    JiraExplorer = 'atlascode:jiraExplorerEnabled',
    BitbucketExplorer = 'atlascode:bitbucketExplorerEnabled',
    PipelineExplorer = 'atlascode:pipelineExplorerEnabled',
    BitbucketIssuesExplorer = 'atlascode:bitbucketIssuesExplorerEnabled',
    OpenIssuesTree = 'atlascode:openIssuesTreeEnabled',
    AssignedIssuesTree = 'atlascode:assignedIssuesTreeEnabled',
    JiraLoginTree = 'atlascode:jiraLoginTreeEnabled',
    IsJiraAuthenticated = 'atlascode:isJiraAuthenticated',
    IsBBAuthenticated = 'atlascode:isBBAuthenticated',
}

export function setCommandContext(key: CommandContext | string, value: any) {
    return commands.executeCommand('setContext', key, value);
}
