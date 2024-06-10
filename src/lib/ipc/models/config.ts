export enum ConfigMessages {
    Init = 'init',
    ConfigUpdate = 'configUpdate',
    JQLOptionsResponse = 'jqlOptionsResponse',
    SitesUpdate = 'sitesUpdate',
}

export enum ConfigTarget {
    User = 'user',
    Workspace = 'workspace',
    WorkspaceFolder = 'workspacefolder',
}

export enum ConfigSection {
    Jira = 'jira',
    Bitbucket = 'bitbucket',
    General = 'general',
    Explore = 'explore',
}

export enum ConfigSubSection {
    Auth = 'auth',
    Issues = 'issues',
    Hovers = 'hovers',
    Triggers = 'triggers',
    Status = 'status',
    PR = 'pullRequests',
    Pipelines = 'pipelines',
    ContextMenus = 'contextMenus',
    PreferredRemotes = 'preferredRemotes',
    Misc = 'misc',
    Connectivity = 'connect',
    Debug = 'debug',
    JiraFeatures = 'jiraFeatures',
    BitbucketFeatures = 'bitbucketFeatures',
    StartWork = 'startWork',
}

export function configTargetForString(target: string): ConfigTarget {
    switch (target.toLowerCase()) {
        case 'user': {
            return ConfigTarget.User;
        }
        case 'workspace': {
            return ConfigTarget.Workspace;
        }
        case 'workspacefolder': {
            return ConfigTarget.WorkspaceFolder;
        }

        default: {
            return ConfigTarget.User;
        }
    }
}

export interface ConfigWorkspaceFolder {
    name: string;
    uri: string;
}

export type FlattenedConfig = { [key: string]: any };
