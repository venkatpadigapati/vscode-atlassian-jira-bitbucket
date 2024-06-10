import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import equal from 'fast-deep-equal/es6';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { DetailedSiteInfo } from '../../../../../atlclients/authInfo';
import { JQLEntry } from '../../../../../config/model';
import { ConfigSection, ConfigSubSection } from '../../../../../lib/ipc/models/config';
import { CommonSubpanelProps } from '../../../common/commonPanelProps';
import { PanelSubtitle } from '../../../common/PanelSubtitle';
import { PanelTitle } from '../../../common/PanelTitle';
import { JiraExplorer } from '../JiraExplorer';

type JiraExplorerPanelProps = CommonSubpanelProps & {
    enabled: boolean;
    nestSubtasks: boolean;
    fetchAllQueryResults: boolean;
    monitorEnabled: boolean;
    refreshInterval: number;
    jqlList: JQLEntry[];
    sites: DetailedSiteInfo[];
};

export const JiraExplorerPanel: React.FunctionComponent<JiraExplorerPanelProps> = memo(
    ({
        visible,
        expanded,
        onSubsectionChange,
        enabled,
        nestSubtasks,
        fetchAllQueryResults,
        monitorEnabled,
        refreshInterval,
        sites,
        jqlList,
    }) => {
        const [internalExpanded, setInternalExpanded] = useState(expanded);
        const [internalSites, setInternalSites] = useState(sites);
        const [internalJql, setInternalJql] = useState(jqlList);

        const expansionHandler = useCallback(
            (event: React.ChangeEvent<{}>, expanded: boolean) => {
                setInternalExpanded(expanded);
                onSubsectionChange(ConfigSubSection.Issues, expanded);
            },
            [onSubsectionChange]
        );

        useEffect(() => {
            setInternalSites((oldSites) => {
                if (!equal(oldSites, sites)) {
                    return sites;
                }
                return oldSites;
            });
        }, [sites]);

        useEffect(() => {
            setInternalJql((oldJql) => {
                if (!equal(oldJql, jqlList)) {
                    return jqlList;
                }
                return oldJql;
            });
        }, [jqlList]);

        useEffect(() => {
            setInternalExpanded((oldExpanded) => {
                if (oldExpanded !== expanded) {
                    return expanded;
                }
                return oldExpanded;
            });
        }, [expanded]);

        return (
            <ExpansionPanel hidden={!visible} square={false} expanded={internalExpanded} onChange={expansionHandler}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${ConfigSection.Jira}-${ConfigSubSection.Issues}-content`}
                    id={`${ConfigSection.Jira}-${ConfigSubSection.Issues}-header`}
                >
                    <PanelTitle>Jira Issues Explorer</PanelTitle>
                    <PanelSubtitle>configure the Jira issue explorer, custom JQL and notifications</PanelSubtitle>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <JiraExplorer
                        sites={internalSites}
                        jqlList={internalJql}
                        enabled={enabled}
                        nestSubtasks={nestSubtasks}
                        fetchAllQueryResults={fetchAllQueryResults}
                        monitorEnabled={monitorEnabled}
                        refreshInterval={refreshInterval}
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
);
