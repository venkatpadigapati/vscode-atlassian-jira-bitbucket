# Atlassian for VS Code

Atlassian for VS Code brings the functionality of Atlassian products to your favorite IDE!

This extension combines the power of Jira and Bitbucket to streamline the developer workflow within VS Code.

With Atlassian for VS Code you can create and view issues, start work on issues, create pull requests, do code reviews, start builds, get build statuses and more!

**Note:** 'Atlassian for VS Code' is published as an Atlassian Labs project.
Although you may find unique and highly useful functionality in the Atlassian Labs apps, Atlassian takes no responsibility for your use of these apps.

## Getting Started

-   Make sure you have VS Code version 1.40.0 or above
-   Download the extension from the marketplace
-   Authenticate with Jira and/or Bitbucket from the 'Atlassian: Open Settings' page available in the command palette
-   From the command palette, type 'Atlassian:' to see all of the extensions available commands

For more information, see [Getting started with VS Code](https://confluence.atlassian.com/display/BITBUCKET/Getting+started+with+VS+Code) and the related content.

**Note:** Jira Service Desk projects are not fully supported at this time.

## Features at a Glance

Here's a quick peek at a developer's workflow:

![dev workflow](https://bitbucket.org/atlassianlabs/atlascode/raw/main/.readme/dev-workflow.gif)

Reviewing with Bitbucket pull request features is a snap:

![review pr](https://bitbucket.org/atlassianlabs/atlascode/raw/main/.readme/review-pr.gif)

Got a burning issue you'd like to work on?

![start work](https://bitbucket.org/atlassianlabs/atlascode/raw/main/.readme/issue-start-work.gif)

Kick off your builds:

![builds](https://bitbucket.org/atlassianlabs/atlascode/raw/main/.readme/start-pipeline.gif)

Create that issue without breaking your stride:

![issue from todo](https://bitbucket.org/atlassianlabs/atlascode/raw/main/.readme/create-from-code-lens.gif)

...and lots more

## Everyone Has Issues...

Please refer to [our issue tracker for known issues](https://bitbucket.org/atlassianlabs/atlascode/issues) and please contribute if you encounter an issue yourself.

**Note for Server/Data Center users:** The extension supports Jira and Bitbucket versions released in the last two years, per our [end of life policy](https://confluence.atlassian.com/x/ewAID).
You can find your instance's version in the footer of any Jira/Bitbucket page.

### Questions? Comments? Kudos?

Please use the in-app feedback form to tell us what you think! It's available from the 'Atlassian: Open Settings' and 'Atlassian: Open Welcome' pages available in the command palette.

## Contributors

Pull requests, issues and comments welcome.

Please read our [Code of Conduct](CODE_OF_CONDUCT.md).

Running and debugging the extension:

-   Atlassian for VS Code is a node project, as such you'll need to run `npm install` before building.
-   To debug the extension from within VS Code you'll need a `launch.json`.
    ** An example `launch.json` that will be suitable for most users is included as `.vscode/launch.json.example`.
    ** To use the example file simply copy it to `launch.json`.
-   Once you have a `launch.json` file select "Debug and Run" from the Activity Bar and click "Start Debugging".
    \*\* After the extension builds VS Code will launch a new instance of itself (the Extension Development Host) running the extension.
-   When you want to test your code changes
    ** If the extension development host is still running restart by clicking ⟲ in the debug toolbar.
    ** If you've already stopped the host just start debugging again.

For pull requests:

-   Follow the existing style
-   Separate unrelated changes into multiple pull requests
-   Pull requests should target the `external-contributions` branch

Atlassian requires contributors to sign a Contributor License Agreement,
known as a CLA. This serves as a record stating that the contributor is
entitled to contribute the code/documentation/translation to the project
and is willing to have it used in distributions and derivative works
(or is willing to transfer ownership).

Prior to accepting your contributions we ask that you please follow the appropriate
link below to digitally sign the CLA. The Corporate CLA is for those who are
contributing as a member of an organization and the individual CLA is for
those contributing as an individual.

-   [CLA for corporate contributors](https://na2.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=e1c17c66-ca4d-4aab-a953-2c231af4a20b)
-   [CLA for individuals](https://na2.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=3f94fbdc-2fbe-46ac-b14c-5d152700ae5d)













case 0:
              //_context9.next = 2;
              //return this.getFromJira("issue/createmeta/".concat(projectKey, "/issuetypes"));
            //case 2:
              //res = _context9.sent;
              //return _context9.abrupt("return", (0, _createMeta.readIssueCreateMetadata)(res));
              res = {
                "expand": "projects",
                "projects": [
                  {
                    "expand": "issuetypes",
                    "self": "https://venkat-padigapati.atlassian.net/rest/api/2/project/10001",
                    "id": "10001",
                    "key": "DEMO",
                    "name": "Demo service project",
                    "avatarUrls": {
                      "48x48": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403",
                      "24x24": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=small",
                      "16x16": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=xsmall",
                      "32x32": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=medium"
                    },
                    "issuetypes": [
                      {
                        "self": "https://venkat-padigapati.atlassian.net/rest/api/2/issuetype/10002",
                        "id": "10002",
                        "description": "An IT problem or question.",
                        "iconUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10565?size=medium",
                        "name": "IT Help",
                        "untranslatedName": "IT Help",
                        "subtask": false,
                        "hierarchyLevel": 0,
                        "expand": "fields",
                        "fields": {
                          "summary": {
                            "required": true,
                            "schema": {
                              "type": "string",
                              "system": "summary"
                            },
                            "name": "Summary",
                            "key": "summary",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "issuetype": {
                            "required": false,
                            "schema": {
                              "type": "issuetype",
                              "system": "issuetype"
                            },
                            "name": "Issue Type",
                            "key": "issuetype",
                            "hasDefaultValue": false,
                            "operations": [],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/issuetype/10002",
                                "id": "10002",
                                "description": "An IT problem or question.",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10565?size=medium",
                                "name": "IT Help",
                                "subtask": false,
                                "avatarId": 10565,
                                "hierarchyLevel": 0
                              }
                            ]
                          },
                          "parent": {
                            "required": false,
                            "schema": {
                              "type": "issuelink",
                              "system": "parent"
                            },
                            "name": "Parent",
                            "key": "parent",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "components": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "component",
                              "system": "components"
                            },
                            "name": "Components",
                            "key": "components",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10001",
                                "id": "10001",
                                "name": "Intranet",
                                "description": "Issues related to the intranet. Created by Jira Service Management."
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10000",
                                "id": "10000",
                                "name": "Jira",
                                "description": "Issues related to Jira. Created by Jira Service Management."
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10002",
                                "id": "10002",
                                "name": "Public website",
                                "description": "Issues related to the public website. Created by Jira Service Management."
                              }
                            ]
                          },
                          "description": {
                            "required": false,
                            "schema": {
                              "type": "string",
                              "system": "description"
                            },
                            "name": "Description",
                            "key": "description",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "project": {
                            "required": true,
                            "schema": {
                              "type": "project",
                              "system": "project"
                            },
                            "name": "Project",
                            "key": "project",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/project/10001",
                                "id": "10001",
                                "key": "DEMO",
                                "name": "Demo service project",
                                "projectTypeKey": "service_desk",
                                "simplified": false,
                                "avatarUrls": {
                                  "48x48": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403",
                                  "24x24": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=small",
                                  "16x16": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=xsmall",
                                  "32x32": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=medium"
                                }
                              }
                            ]
                          },
                          "reporter": {
                            "required": false,
                            "schema": {
                              "type": "user",
                              "system": "reporter"
                            },
                            "name": "Reporter",
                            "key": "reporter",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/user/search?query=",
                            "hasDefaultValue": true,
                            "operations": [
                              "set"
                            ]
                          },
                          "customfield_10010": {
                            "required": false,
                            "schema": {
                              "type": "sd-customerrequesttype",
                              "custom": "com.atlassian.servicedesk:vp-origin",
                              "customId": 10010
                            },
                            "name": "Request Type",
                            "key": "customfield_10010",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "customfield_10032": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "user",
                              "custom": "com.atlassian.servicedesk:sd-request-participants",
                              "customId": 10032
                            },
                            "name": "Request participants",
                            "key": "customfield_10032",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/servicedesk/1/servicedesk/sd-user-search/participants?issueKey=null&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10033": {
                            "required": false,
                            "schema": {
                              "type": "sd-feedback",
                              "custom": "com.atlassian.servicedesk:sd-request-feedback",
                              "customId": 10033
                            },
                            "name": "Satisfaction",
                            "key": "customfield_10033",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "priority": {
                            "required": false,
                            "schema": {
                              "type": "priority",
                              "system": "priority"
                            },
                            "name": "Priority",
                            "key": "priority",
                            "hasDefaultValue": true,
                            "operations": [
                              "set"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/1",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/highest.svg",
                                "name": "Highest",
                                "id": "1"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/2",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/high.svg",
                                "name": "High",
                                "id": "2"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/3",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/medium.svg",
                                "name": "Medium",
                                "id": "3"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/4",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/low.svg",
                                "name": "Low",
                                "id": "4"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/5",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/lowest.svg",
                                "name": "Lowest",
                                "id": "5"
                              }
                            ],
                            "defaultValue": {
                              "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/3",
                              "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/medium.svg",
                              "name": "Medium",
                              "id": "3"
                            }
                          },
                          "customfield_10002": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "sd-customerorganization",
                              "custom": "com.atlassian.servicedesk:sd-customer-organizations",
                              "customId": 10002
                            },
                            "name": "Organizations",
                            "key": "customfield_10002",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/servicedesk/1/organisations/project/10001/search?query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10003": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "user",
                              "custom": "com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker",
                              "customId": 10003
                            },
                            "name": "Approvers",
                            "key": "customfield_10003",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/1.0/users/picker?fieldName=customfield_10003&showAvatar=true&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "labels": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "string",
                              "system": "labels"
                            },
                            "name": "Labels",
                            "key": "labels",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/1.0/labels/suggest?query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10037": {
                            "required": false,
                            "schema": {
                              "type": "sd-request-lang",
                              "custom": "com.atlassian.servicedesk.servicedesk-lingo-integration-plugin:sd-request-language",
                              "customId": 10037
                            },
                            "name": "Request language",
                            "key": "customfield_10037",
                            "hasDefaultValue": false,
                            "operations": [],
                            "allowedValues": [
                              {
                                "languageCode": "en",
                                "displayName": "English"
                              }
                            ]
                          },
                          "timetracking": {
                            "required": false,
                            "schema": {
                              "type": "timetracking",
                              "system": "timetracking"
                            },
                            "name": "Time tracking",
                            "key": "timetracking",
                            "hasDefaultValue": false,
                            "operations": [
                              "set",
                              "edit"
                            ]
                          },
                          "customfield_10038": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "group",
                              "custom": "com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker",
                              "customId": 10038
                            },
                            "name": "Approver groups",
                            "key": "customfield_10038",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "attachment": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "attachment",
                              "system": "attachment"
                            },
                            "name": "Attachment",
                            "key": "attachment",
                            "hasDefaultValue": false,
                            "operations": [
                              "set",
                              "copy"
                            ]
                          },
                          "duedate": {
                            "required": false,
                            "schema": {
                              "type": "date",
                              "system": "duedate"
                            },
                            "name": "Due date",
                            "key": "duedate",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "issuelinks": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "issuelinks",
                              "system": "issuelinks"
                            },
                            "name": "Linked Issues",
                            "key": "issuelinks",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/issue/picker?currentProjectId=&showSubTaskParent=true&showSubTasks=true&currentIssueKey=null&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "copy"
                            ]
                          },
                          "assignee": {
                            "required": false,
                            "schema": {
                              "type": "user",
                              "system": "assignee"
                            },
                            "name": "Assignee",
                            "key": "assignee",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/user/assignable/search?project=DEMO&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          }
                        }
                      },
                      {
                        "self": "https://venkat-padigapati.atlassian.net/rest/api/2/issuetype/10007",
                        "id": "10007",
                        "description": "A task that needs to be done.",
                        "iconUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10570?size=medium",
                        "name": "Task",
                        "untranslatedName": "Task",
                        "subtask": false,
                        "hierarchyLevel": 0,
                        "expand": "fields",
                        "fields": {
                          "summary": {
                            "required": true,
                            "schema": {
                              "type": "string",
                              "system": "summary"
                            },
                            "name": "Summary",
                            "key": "summary",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "issuetype": {
                            "required": false,
                            "schema": {
                              "type": "issuetype",
                              "system": "issuetype"
                            },
                            "name": "Issue Type",
                            "key": "issuetype",
                            "hasDefaultValue": false,
                            "operations": [],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/issuetype/10007",
                                "id": "10007",
                                "description": "A task that needs to be done.",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10570?size=medium",
                                "name": "Task",
                                "subtask": false,
                                "avatarId": 10570,
                                "hierarchyLevel": 0
                              }
                            ]
                          },
                          "parent": {
                            "required": false,
                            "schema": {
                              "type": "issuelink",
                              "system": "parent"
                            },
                            "name": "Parent",
                            "key": "parent",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "components": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "component",
                              "system": "components"
                            },
                            "name": "Components",
                            "key": "components",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10001",
                                "id": "10001",
                                "name": "Intranet",
                                "description": "Issues related to the intranet. Created by Jira Service Management."
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10000",
                                "id": "10000",
                                "name": "Jira",
                                "description": "Issues related to Jira. Created by Jira Service Management."
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10002",
                                "id": "10002",
                                "name": "Public website",
                                "description": "Issues related to the public website. Created by Jira Service Management."
                              }
                            ]
                          },
                          "description": {
                            "required": false,
                            "schema": {
                              "type": "string",
                              "system": "description"
                            },
                            "name": "Description",
                            "key": "description",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "project": {
                            "required": true,
                            "schema": {
                              "type": "project",
                              "system": "project"
                            },
                            "name": "Project",
                            "key": "project",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/project/10001",
                                "id": "10001",
                                "key": "DEMO",
                                "name": "Demo service project",
                                "projectTypeKey": "service_desk",
                                "simplified": false,
                                "avatarUrls": {
                                  "48x48": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403",
                                  "24x24": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=small",
                                  "16x16": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=xsmall",
                                  "32x32": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=medium"
                                }
                              }
                            ]
                          },
                          "reporter": {
                            "required": false,
                            "schema": {
                              "type": "user",
                              "system": "reporter"
                            },
                            "name": "Reporter",
                            "key": "reporter",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/user/search?query=",
                            "hasDefaultValue": true,
                            "operations": [
                              "set"
                            ]
                          },
                          "customfield_10010": {
                            "required": false,
                            "schema": {
                              "type": "sd-customerrequesttype",
                              "custom": "com.atlassian.servicedesk:vp-origin",
                              "customId": 10010
                            },
                            "name": "Request Type",
                            "key": "customfield_10010",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "customfield_10032": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "user",
                              "custom": "com.atlassian.servicedesk:sd-request-participants",
                              "customId": 10032
                            },
                            "name": "Request participants",
                            "key": "customfield_10032",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/servicedesk/1/servicedesk/sd-user-search/participants?issueKey=null&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10033": {
                            "required": false,
                            "schema": {
                              "type": "sd-feedback",
                              "custom": "com.atlassian.servicedesk:sd-request-feedback",
                              "customId": 10033
                            },
                            "name": "Satisfaction",
                            "key": "customfield_10033",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "priority": {
                            "required": false,
                            "schema": {
                              "type": "priority",
                              "system": "priority"
                            },
                            "name": "Priority",
                            "key": "priority",
                            "hasDefaultValue": true,
                            "operations": [
                              "set"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/1",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/highest.svg",
                                "name": "Highest",
                                "id": "1"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/2",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/high.svg",
                                "name": "High",
                                "id": "2"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/3",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/medium.svg",
                                "name": "Medium",
                                "id": "3"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/4",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/low.svg",
                                "name": "Low",
                                "id": "4"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/5",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/lowest.svg",
                                "name": "Lowest",
                                "id": "5"
                              }
                            ],
                            "defaultValue": {
                              "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/3",
                              "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/medium.svg",
                              "name": "Medium",
                              "id": "3"
                            }
                          },
                          "customfield_10002": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "sd-customerorganization",
                              "custom": "com.atlassian.servicedesk:sd-customer-organizations",
                              "customId": 10002
                            },
                            "name": "Organizations",
                            "key": "customfield_10002",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/servicedesk/1/organisations/project/10001/search?query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10003": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "user",
                              "custom": "com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker",
                              "customId": 10003
                            },
                            "name": "Approvers",
                            "key": "customfield_10003",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/1.0/users/picker?fieldName=customfield_10003&showAvatar=true&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "labels": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "string",
                              "system": "labels"
                            },
                            "name": "Labels",
                            "key": "labels",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/1.0/labels/suggest?query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10037": {
                            "required": false,
                            "schema": {
                              "type": "sd-request-lang",
                              "custom": "com.atlassian.servicedesk.servicedesk-lingo-integration-plugin:sd-request-language",
                              "customId": 10037
                            },
                            "name": "Request language",
                            "key": "customfield_10037",
                            "hasDefaultValue": false,
                            "operations": [],
                            "allowedValues": [
                              {
                                "languageCode": "en",
                                "displayName": "English"
                              }
                            ]
                          },
                          "timetracking": {
                            "required": false,
                            "schema": {
                              "type": "timetracking",
                              "system": "timetracking"
                            },
                            "name": "Time tracking",
                            "key": "timetracking",
                            "hasDefaultValue": false,
                            "operations": [
                              "set",
                              "edit"
                            ]
                          },
                          "customfield_10038": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "group",
                              "custom": "com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker",
                              "customId": 10038
                            },
                            "name": "Approver groups",
                            "key": "customfield_10038",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "attachment": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "attachment",
                              "system": "attachment"
                            },
                            "name": "Attachment",
                            "key": "attachment",
                            "hasDefaultValue": false,
                            "operations": [
                              "set",
                              "copy"
                            ]
                          },
                          "duedate": {
                            "required": false,
                            "schema": {
                              "type": "date",
                              "system": "duedate"
                            },
                            "name": "Due date",
                            "key": "duedate",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "issuelinks": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "issuelinks",
                              "system": "issuelinks"
                            },
                            "name": "Linked Issues",
                            "key": "issuelinks",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/issue/picker?currentProjectId=&showSubTaskParent=true&showSubTasks=true&currentIssueKey=null&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "copy"
                            ]
                          },
                          "assignee": {
                            "required": false,
                            "schema": {
                              "type": "user",
                              "system": "assignee"
                            },
                            "name": "Assignee",
                            "key": "assignee",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/user/assignable/search?project=DEMO&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          }
                        }
                      },
                      {
                        "self": "https://venkat-padigapati.atlassian.net/rest/api/2/issuetype/10004",
                        "id": "10004",
                        "description": "A request that follows ITSM workflows.",
                        "iconUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10567?size=medium",
                        "name": "Service Request",
                        "untranslatedName": "Service Request",
                        "subtask": false,
                        "hierarchyLevel": 0,
                        "expand": "fields",
                        "fields": {
                          "summary": {
                            "required": true,
                            "schema": {
                              "type": "string",
                              "system": "summary"
                            },
                            "name": "Summary",
                            "key": "summary",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "issuetype": {
                            "required": false,
                            "schema": {
                              "type": "issuetype",
                              "system": "issuetype"
                            },
                            "name": "Issue Type",
                            "key": "issuetype",
                            "hasDefaultValue": false,
                            "operations": [],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/issuetype/10004",
                                "id": "10004",
                                "description": "A request that follows ITSM workflows.",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10567?size=medium",
                                "name": "Service Request",
                                "subtask": false,
                                "avatarId": 10567,
                                "hierarchyLevel": 0
                              }
                            ]
                          },
                          "parent": {
                            "required": false,
                            "schema": {
                              "type": "issuelink",
                              "system": "parent"
                            },
                            "name": "Parent",
                            "key": "parent",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "components": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "component",
                              "system": "components"
                            },
                            "name": "Components",
                            "key": "components",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10001",
                                "id": "10001",
                                "name": "Intranet",
                                "description": "Issues related to the intranet. Created by Jira Service Management."
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10000",
                                "id": "10000",
                                "name": "Jira",
                                "description": "Issues related to Jira. Created by Jira Service Management."
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10002",
                                "id": "10002",
                                "name": "Public website",
                                "description": "Issues related to the public website. Created by Jira Service Management."
                              }
                            ]
                          },
                          "description": {
                            "required": false,
                            "schema": {
                              "type": "string",
                              "system": "description"
                            },
                            "name": "Description",
                            "key": "description",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "project": {
                            "required": true,
                            "schema": {
                              "type": "project",
                              "system": "project"
                            },
                            "name": "Project",
                            "key": "project",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/project/10001",
                                "id": "10001",
                                "key": "DEMO",
                                "name": "Demo service project",
                                "projectTypeKey": "service_desk",
                                "simplified": false,
                                "avatarUrls": {
                                  "48x48": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403",
                                  "24x24": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=small",
                                  "16x16": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=xsmall",
                                  "32x32": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=medium"
                                }
                              }
                            ]
                          },
                          "reporter": {
                            "required": false,
                            "schema": {
                              "type": "user",
                              "system": "reporter"
                            },
                            "name": "Reporter",
                            "key": "reporter",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/user/search?query=",
                            "hasDefaultValue": true,
                            "operations": [
                              "set"
                            ]
                          },
                          "customfield_10010": {
                            "required": false,
                            "schema": {
                              "type": "sd-customerrequesttype",
                              "custom": "com.atlassian.servicedesk:vp-origin",
                              "customId": 10010
                            },
                            "name": "Request Type",
                            "key": "customfield_10010",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "customfield_10032": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "user",
                              "custom": "com.atlassian.servicedesk:sd-request-participants",
                              "customId": 10032
                            },
                            "name": "Request participants",
                            "key": "customfield_10032",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/servicedesk/1/servicedesk/sd-user-search/participants?issueKey=null&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10033": {
                            "required": false,
                            "schema": {
                              "type": "sd-feedback",
                              "custom": "com.atlassian.servicedesk:sd-request-feedback",
                              "customId": 10033
                            },
                            "name": "Satisfaction",
                            "key": "customfield_10033",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "priority": {
                            "required": false,
                            "schema": {
                              "type": "priority",
                              "system": "priority"
                            },
                            "name": "Priority",
                            "key": "priority",
                            "hasDefaultValue": true,
                            "operations": [
                              "set"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/1",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/highest.svg",
                                "name": "Highest",
                                "id": "1"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/2",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/high.svg",
                                "name": "High",
                                "id": "2"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/3",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/medium.svg",
                                "name": "Medium",
                                "id": "3"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/4",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/low.svg",
                                "name": "Low",
                                "id": "4"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/5",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/lowest.svg",
                                "name": "Lowest",
                                "id": "5"
                              }
                            ],
                            "defaultValue": {
                              "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/3",
                              "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/medium.svg",
                              "name": "Medium",
                              "id": "3"
                            }
                          },
                          "customfield_10002": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "sd-customerorganization",
                              "custom": "com.atlassian.servicedesk:sd-customer-organizations",
                              "customId": 10002
                            },
                            "name": "Organizations",
                            "key": "customfield_10002",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/servicedesk/1/organisations/project/10001/search?query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10003": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "user",
                              "custom": "com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker",
                              "customId": 10003
                            },
                            "name": "Approvers",
                            "key": "customfield_10003",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/1.0/users/picker?fieldName=customfield_10003&showAvatar=true&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "labels": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "string",
                              "system": "labels"
                            },
                            "name": "Labels",
                            "key": "labels",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/1.0/labels/suggest?query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10037": {
                            "required": false,
                            "schema": {
                              "type": "sd-request-lang",
                              "custom": "com.atlassian.servicedesk.servicedesk-lingo-integration-plugin:sd-request-language",
                              "customId": 10037
                            },
                            "name": "Request language",
                            "key": "customfield_10037",
                            "hasDefaultValue": false,
                            "operations": [],
                            "allowedValues": [
                              {
                                "languageCode": "en",
                                "displayName": "English"
                              }
                            ]
                          },
                          "timetracking": {
                            "required": false,
                            "schema": {
                              "type": "timetracking",
                              "system": "timetracking"
                            },
                            "name": "Time tracking",
                            "key": "timetracking",
                            "hasDefaultValue": false,
                            "operations": [
                              "set",
                              "edit"
                            ]
                          },
                          "customfield_10038": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "group",
                              "custom": "com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker",
                              "customId": 10038
                            },
                            "name": "Approver groups",
                            "key": "customfield_10038",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "attachment": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "attachment",
                              "system": "attachment"
                            },
                            "name": "Attachment",
                            "key": "attachment",
                            "hasDefaultValue": false,
                            "operations": [
                              "set",
                              "copy"
                            ]
                          },
                          "duedate": {
                            "required": false,
                            "schema": {
                              "type": "date",
                              "system": "duedate"
                            },
                            "name": "Due date",
                            "key": "duedate",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "issuelinks": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "issuelinks",
                              "system": "issuelinks"
                            },
                            "name": "Linked Issues",
                            "key": "issuelinks",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/issue/picker?currentProjectId=&showSubTaskParent=true&showSubTasks=true&currentIssueKey=null&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "copy"
                            ]
                          },
                          "assignee": {
                            "required": false,
                            "schema": {
                              "type": "user",
                              "system": "assignee"
                            },
                            "name": "Assignee",
                            "key": "assignee",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/user/assignable/search?project=DEMO&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          }
                        }
                      },
                      {
                        "self": "https://venkat-padigapati.atlassian.net/rest/api/2/issuetype/10008",
                        "id": "10008",
                        "description": "The sub-task of the issue",
                        "iconUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10571?size=medium",
                        "name": "Sub-task",
                        "untranslatedName": "Sub-task",
                        "subtask": true,
                        "hierarchyLevel": -1,
                        "expand": "fields",
                        "fields": {
                          "summary": {
                            "required": true,
                            "schema": {
                              "type": "string",
                              "system": "summary"
                            },
                            "name": "Summary",
                            "key": "summary",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "issuetype": {
                            "required": false,
                            "schema": {
                              "type": "issuetype",
                              "system": "issuetype"
                            },
                            "name": "Issue Type",
                            "key": "issuetype",
                            "hasDefaultValue": false,
                            "operations": [],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/issuetype/10008",
                                "id": "10008",
                                "description": "The sub-task of the issue",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10571?size=medium",
                                "name": "Sub-task",
                                "subtask": true,
                                "avatarId": 10571,
                                "hierarchyLevel": -1
                              }
                            ]
                          },
                          "parent": {
                            "required": true,
                            "schema": {
                              "type": "issuelink",
                              "system": "parent"
                            },
                            "name": "Parent",
                            "key": "parent",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "components": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "component",
                              "system": "components"
                            },
                            "name": "Components",
                            "key": "components",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10001",
                                "id": "10001",
                                "name": "Intranet",
                                "description": "Issues related to the intranet. Created by Jira Service Management."
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10000",
                                "id": "10000",
                                "name": "Jira",
                                "description": "Issues related to Jira. Created by Jira Service Management."
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10002",
                                "id": "10002",
                                "name": "Public website",
                                "description": "Issues related to the public website. Created by Jira Service Management."
                              }
                            ]
                          },
                          "description": {
                            "required": false,
                            "schema": {
                              "type": "string",
                              "system": "description"
                            },
                            "name": "Description",
                            "key": "description",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "project": {
                            "required": true,
                            "schema": {
                              "type": "project",
                              "system": "project"
                            },
                            "name": "Project",
                            "key": "project",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/project/10001",
                                "id": "10001",
                                "key": "DEMO",
                                "name": "Demo service project",
                                "projectTypeKey": "service_desk",
                                "simplified": false,
                                "avatarUrls": {
                                  "48x48": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403",
                                  "24x24": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=small",
                                  "16x16": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=xsmall",
                                  "32x32": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=medium"
                                }
                              }
                            ]
                          },
                          "reporter": {
                            "required": false,
                            "schema": {
                              "type": "user",
                              "system": "reporter"
                            },
                            "name": "Reporter",
                            "key": "reporter",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/user/search?query=",
                            "hasDefaultValue": true,
                            "operations": [
                              "set"
                            ]
                          },
                          "customfield_10010": {
                            "required": false,
                            "schema": {
                              "type": "sd-customerrequesttype",
                              "custom": "com.atlassian.servicedesk:vp-origin",
                              "customId": 10010
                            },
                            "name": "Request Type",
                            "key": "customfield_10010",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "customfield_10032": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "user",
                              "custom": "com.atlassian.servicedesk:sd-request-participants",
                              "customId": 10032
                            },
                            "name": "Request participants",
                            "key": "customfield_10032",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/servicedesk/1/servicedesk/sd-user-search/participants?issueKey=null&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10033": {
                            "required": false,
                            "schema": {
                              "type": "sd-feedback",
                              "custom": "com.atlassian.servicedesk:sd-request-feedback",
                              "customId": 10033
                            },
                            "name": "Satisfaction",
                            "key": "customfield_10033",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "priority": {
                            "required": false,
                            "schema": {
                              "type": "priority",
                              "system": "priority"
                            },
                            "name": "Priority",
                            "key": "priority",
                            "hasDefaultValue": true,
                            "operations": [
                              "set"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/1",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/highest.svg",
                                "name": "Highest",
                                "id": "1"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/2",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/high.svg",
                                "name": "High",
                                "id": "2"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/3",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/medium.svg",
                                "name": "Medium",
                                "id": "3"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/4",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/low.svg",
                                "name": "Low",
                                "id": "4"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/5",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/lowest.svg",
                                "name": "Lowest",
                                "id": "5"
                              }
                            ],
                            "defaultValue": {
                              "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/3",
                              "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/medium.svg",
                              "name": "Medium",
                              "id": "3"
                            }
                          },
                          "customfield_10002": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "sd-customerorganization",
                              "custom": "com.atlassian.servicedesk:sd-customer-organizations",
                              "customId": 10002
                            },
                            "name": "Organizations",
                            "key": "customfield_10002",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/servicedesk/1/organisations/project/10001/search?query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10003": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "user",
                              "custom": "com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker",
                              "customId": 10003
                            },
                            "name": "Approvers",
                            "key": "customfield_10003",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/1.0/users/picker?fieldName=customfield_10003&showAvatar=true&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "labels": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "string",
                              "system": "labels"
                            },
                            "name": "Labels",
                            "key": "labels",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/1.0/labels/suggest?query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10037": {
                            "required": false,
                            "schema": {
                              "type": "sd-request-lang",
                              "custom": "com.atlassian.servicedesk.servicedesk-lingo-integration-plugin:sd-request-language",
                              "customId": 10037
                            },
                            "name": "Request language",
                            "key": "customfield_10037",
                            "hasDefaultValue": false,
                            "operations": [],
                            "allowedValues": [
                              {
                                "languageCode": "en",
                                "displayName": "English"
                              }
                            ]
                          },
                          "timetracking": {
                            "required": false,
                            "schema": {
                              "type": "timetracking",
                              "system": "timetracking"
                            },
                            "name": "Time tracking",
                            "key": "timetracking",
                            "hasDefaultValue": false,
                            "operations": [
                              "set",
                              "edit"
                            ]
                          },
                          "customfield_10038": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "group",
                              "custom": "com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker",
                              "customId": 10038
                            },
                            "name": "Approver groups",
                            "key": "customfield_10038",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "attachment": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "attachment",
                              "system": "attachment"
                            },
                            "name": "Attachment",
                            "key": "attachment",
                            "hasDefaultValue": false,
                            "operations": [
                              "set",
                              "copy"
                            ]
                          },
                          "duedate": {
                            "required": false,
                            "schema": {
                              "type": "date",
                              "system": "duedate"
                            },
                            "name": "Due date",
                            "key": "duedate",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "issuelinks": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "issuelinks",
                              "system": "issuelinks"
                            },
                            "name": "Linked Issues",
                            "key": "issuelinks",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/issue/picker?currentProjectId=&showSubTaskParent=true&showSubTasks=true&currentIssueKey=null&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "copy"
                            ]
                          },
                          "assignee": {
                            "required": false,
                            "schema": {
                              "type": "user",
                              "system": "assignee"
                            },
                            "name": "Assignee",
                            "key": "assignee",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/user/assignable/search?project=DEMO&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          }
                        }
                      },
                      {
                        "self": "https://venkat-padigapati.atlassian.net/rest/api/2/issuetype/10006",
                        "id": "10006",
                        "description": "A requests that may require approval.",
                        "iconUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10569?size=medium",
                        "name": "Service Request with Approvals",
                        "untranslatedName": "Service Request with Approvals",
                        "subtask": false,
                        "hierarchyLevel": 0,
                        "expand": "fields",
                        "fields": {
                          "summary": {
                            "required": true,
                            "schema": {
                              "type": "string",
                              "system": "summary"
                            },
                            "name": "Summary",
                            "key": "summary",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "issuetype": {
                            "required": false,
                            "schema": {
                              "type": "issuetype",
                              "system": "issuetype"
                            },
                            "name": "Issue Type",
                            "key": "issuetype",
                            "hasDefaultValue": false,
                            "operations": [],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/issuetype/10006",
                                "id": "10006",
                                "description": "A requests that may require approval.",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10569?size=medium",
                                "name": "Service Request with Approvals",
                                "subtask": false,
                                "avatarId": 10569,
                                "hierarchyLevel": 0
                              }
                            ]
                          },
                          "parent": {
                            "required": false,
                            "schema": {
                              "type": "issuelink",
                              "system": "parent"
                            },
                            "name": "Parent",
                            "key": "parent",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "components": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "component",
                              "system": "components"
                            },
                            "name": "Components",
                            "key": "components",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10001",
                                "id": "10001",
                                "name": "Intranet",
                                "description": "Issues related to the intranet. Created by Jira Service Management."
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10000",
                                "id": "10000",
                                "name": "Jira",
                                "description": "Issues related to Jira. Created by Jira Service Management."
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/component/10002",
                                "id": "10002",
                                "name": "Public website",
                                "description": "Issues related to the public website. Created by Jira Service Management."
                              }
                            ]
                          },
                          "description": {
                            "required": false,
                            "schema": {
                              "type": "string",
                              "system": "description"
                            },
                            "name": "Description",
                            "key": "description",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "project": {
                            "required": true,
                            "schema": {
                              "type": "project",
                              "system": "project"
                            },
                            "name": "Project",
                            "key": "project",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/project/10001",
                                "id": "10001",
                                "key": "DEMO",
                                "name": "Demo service project",
                                "projectTypeKey": "service_desk",
                                "simplified": false,
                                "avatarUrls": {
                                  "48x48": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403",
                                  "24x24": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=small",
                                  "16x16": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=xsmall",
                                  "32x32": "https://venkat-padigapati.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=medium"
                                }
                              }
                            ]
                          },
                          "reporter": {
                            "required": false,
                            "schema": {
                              "type": "user",
                              "system": "reporter"
                            },
                            "name": "Reporter",
                            "key": "reporter",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/user/search?query=",
                            "hasDefaultValue": true,
                            "operations": [
                              "set"
                            ]
                          },
                          "customfield_10010": {
                            "required": false,
                            "schema": {
                              "type": "sd-customerrequesttype",
                              "custom": "com.atlassian.servicedesk:vp-origin",
                              "customId": 10010
                            },
                            "name": "Request Type",
                            "key": "customfield_10010",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "customfield_10032": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "user",
                              "custom": "com.atlassian.servicedesk:sd-request-participants",
                              "customId": 10032
                            },
                            "name": "Request participants",
                            "key": "customfield_10032",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/servicedesk/1/servicedesk/sd-user-search/participants?issueKey=null&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10033": {
                            "required": false,
                            "schema": {
                              "type": "sd-feedback",
                              "custom": "com.atlassian.servicedesk:sd-request-feedback",
                              "customId": 10033
                            },
                            "name": "Satisfaction",
                            "key": "customfield_10033",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "priority": {
                            "required": false,
                            "schema": {
                              "type": "priority",
                              "system": "priority"
                            },
                            "name": "Priority",
                            "key": "priority",
                            "hasDefaultValue": true,
                            "operations": [
                              "set"
                            ],
                            "allowedValues": [
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/1",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/highest.svg",
                                "name": "Highest",
                                "id": "1"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/2",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/high.svg",
                                "name": "High",
                                "id": "2"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/3",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/medium.svg",
                                "name": "Medium",
                                "id": "3"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/4",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/low.svg",
                                "name": "Low",
                                "id": "4"
                              },
                              {
                                "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/5",
                                "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/lowest.svg",
                                "name": "Lowest",
                                "id": "5"
                              }
                            ],
                            "defaultValue": {
                              "self": "https://venkat-padigapati.atlassian.net/rest/api/2/priority/3",
                              "iconUrl": "https://venkat-padigapati.atlassian.net/images/icons/priorities/medium.svg",
                              "name": "Medium",
                              "id": "3"
                            }
                          },
                          "customfield_10002": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "sd-customerorganization",
                              "custom": "com.atlassian.servicedesk:sd-customer-organizations",
                              "customId": 10002
                            },
                            "name": "Organizations",
                            "key": "customfield_10002",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/servicedesk/1/organisations/project/10001/search?query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10003": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "user",
                              "custom": "com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker",
                              "customId": 10003
                            },
                            "name": "Approvers",
                            "key": "customfield_10003",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/1.0/users/picker?fieldName=customfield_10003&showAvatar=true&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "labels": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "string",
                              "system": "labels"
                            },
                            "name": "Labels",
                            "key": "labels",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/1.0/labels/suggest?query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "customfield_10037": {
                            "required": false,
                            "schema": {
                              "type": "sd-request-lang",
                              "custom": "com.atlassian.servicedesk.servicedesk-lingo-integration-plugin:sd-request-language",
                              "customId": 10037
                            },
                            "name": "Request language",
                            "key": "customfield_10037",
                            "hasDefaultValue": false,
                            "operations": [],
                            "allowedValues": [
                              {
                                "languageCode": "en",
                                "displayName": "English"
                              }
                            ]
                          },
                          "timetracking": {
                            "required": false,
                            "schema": {
                              "type": "timetracking",
                              "system": "timetracking"
                            },
                            "name": "Time tracking",
                            "key": "timetracking",
                            "hasDefaultValue": false,
                            "operations": [
                              "set",
                              "edit"
                            ]
                          },
                          "customfield_10038": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "group",
                              "custom": "com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker",
                              "customId": 10038
                            },
                            "name": "Approver groups",
                            "key": "customfield_10038",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "set",
                              "remove"
                            ]
                          },
                          "attachment": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "attachment",
                              "system": "attachment"
                            },
                            "name": "Attachment",
                            "key": "attachment",
                            "hasDefaultValue": false,
                            "operations": [
                              "set",
                              "copy"
                            ]
                          },
                          "duedate": {
                            "required": false,
                            "schema": {
                              "type": "date",
                              "system": "duedate"
                            },
                            "name": "Due date",
                            "key": "duedate",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          },
                          "issuelinks": {
                            "required": false,
                            "schema": {
                              "type": "array",
                              "items": "issuelinks",
                              "system": "issuelinks"
                            },
                            "name": "Linked Issues",
                            "key": "issuelinks",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/issue/picker?currentProjectId=&showSubTaskParent=true&showSubTasks=true&currentIssueKey=null&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "add",
                              "copy"
                            ]
                          },
                          "assignee": {
                            "required": false,
                            "schema": {
                              "type": "user",
                              "system": "assignee"
                            },
                            "name": "Assignee",
                            "key": "assignee",
                            "autoCompleteUrl": "https://venkat-padigapati.atlassian.net/rest/api/2/user/assignable/search?project=DEMO&query=",
                            "hasDefaultValue": false,
                            "operations": [
                              "set"
                            ]
                          }
                        }
                      }
                    ]
                  }
                ]
              };
              console.log(res);
