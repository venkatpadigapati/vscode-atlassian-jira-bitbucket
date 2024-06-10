import { Commands } from '../../commands';
import { SimpleNode } from './simpleNode';

export const emptyBitbucketNodes: SimpleNode[] = [
    new SimpleNode('No Bitbucket repositories found in this workspace'),
    new SimpleNode('Add a repository to this workspace...', {
        command: Commands.WorkbenchOpenRepository,
        title: 'Add repository to workspace',
        arguments: ['pullRequestsTreeView'],
    }),
    new SimpleNode('Clone a repository from Bitbucket...', {
        command: Commands.CloneRepository,
        title: 'Clone repository',
        arguments: ['pullRequestsTreeView'],
    }),
    new SimpleNode('Switch workspace...', {
        command: Commands.WorkbenchOpenWorkspace,
        title: 'Switch workspace',
        arguments: ['pullRequestsTreeView'],
    }),
];
