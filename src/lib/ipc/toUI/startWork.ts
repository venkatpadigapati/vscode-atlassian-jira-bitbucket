import { ReducerAction } from '@atlassianlabs/guipi-core-controller';
import { createEmptyMinimalIssue, MinimalIssue } from '@atlassianlabs/jira-pi-common-models';
import { DetailedSiteInfo, emptySiteInfo } from '../../../atlclients/authInfo';
import { BitbucketBranchingModel, WorkspaceRepo } from '../../../bitbucket/model';
import { Branch } from '../../../typings/git';

export enum StartWorkMessageType {
    Init = 'init',
    StartWorkResponse = 'startWorkResponse',
}

export type StartWorkMessage = ReducerAction<StartWorkMessageType.Init, StartWorkInitMessage>;
export type StartWorkResponse = ReducerAction<StartWorkMessageType.StartWorkResponse, StartWorkResponseMessage>;

export interface ComputedBranchNameMessage {
    branchName: string;
}

export interface StartWorkIssueMessage {
    issue: MinimalIssue<DetailedSiteInfo>;
}

export interface StartWorkInitMessage {
    issue: MinimalIssue<DetailedSiteInfo>;
    repoData: RepoData[];
    customTemplate: string;
    customPrefixes: string[];
}

export interface StartWorkResponseMessage {
    transistionStatus?: string;
    branch?: string;
    upstream?: string;
}

export interface BranchType {
    kind: string;
    prefix: string;
}

export interface RepoData {
    workspaceRepo: WorkspaceRepo;
    href?: string;
    avatarUrl?: string;
    localBranches: Branch[];
    remoteBranches: Branch[];
    branchTypes: BranchType[];
    developmentBranch?: string;
    hasLocalChanges?: boolean;
    branchingModel?: BitbucketBranchingModel;
    isCloud: boolean;
}

export const emptyStartWorkIssueMessage = {
    issue: createEmptyMinimalIssue(emptySiteInfo),
};

export const emptyStartWorkInitMessage = {
    issue: createEmptyMinimalIssue(emptySiteInfo),
    repoData: [],
};

export const emptyRepoData: RepoData = {
    workspaceRepo: {
        rootUri: '',
        mainSiteRemote: {
            site: undefined,
            remote: { name: '', isReadOnly: true },
        },
        siteRemotes: [
            {
                site: undefined,
                remote: { name: '', isReadOnly: true },
            },
        ],
    },
    href: undefined,
    avatarUrl: undefined,
    localBranches: [],
    remoteBranches: [],
    branchTypes: [],
    developmentBranch: undefined,
    hasLocalChanges: undefined,
    branchingModel: undefined,
    isCloud: false,
};
