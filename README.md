## **Project: GitHub Copilot and Data Loss Prevention (DLP) Report Automation**

### **Overview**

In our project, customer data security is paramount. We use GitHub Copilot to enhance developer productivity, but it comes with potential risks related to the exposure of sensitive data, such as customer information and connection strings. The DLP (Data Loss Prevention) team monitors these risks and provides weekly reports on potential exposures.

This document outlines the system design for automatically processing DLP reports related to GitHub Copilot usage, logging infractions, notifying affected users, and tracking repeat offenders. The system is built using Spring Boot, MongoDB, and a custom email notification service.

### **Action Plan**

Our team receives weekly DLP reports that monitor and flag any activities where sensitive data might have been exposed while using Copilot. Based on these reports, we need to take the following actions:

1. **DLP Report Ingestion**: 
   - Upon receiving a DLP report, the system parses it and identifies infractions.
   - Each infraction is saved into the MongoDB database.
   - Users who are flagged in the report are notified via email.

2. **Infraction Tracking**: 
   - The system tracks all infractions for each employee and monitors trends such as repeat offenses over time.

3. **Email Notifications**: 
   - Users are notified if their activities have exposed sensitive data via GitHub Copilot.
   - Repeated offenders are escalated for further action, including mandatory training.

### **DLP Report Details**

We receive the following data in the DLP report:

- **Columns**: `Protocol`, `Date`, `ID`, `Sender`, `Subject`, `Recipient`, `Policy`, `Matches`, `Severity`, `Status`
- **Relevant Columns**:
  - **Date**: Date and time when the activity occurred.
  - **Sender**: Employee or user responsible for the activity (employee ID).
  - **Severity**: The level of severity (`Low`, `Info`), used to assess the seriousness of the exposure.
  - **Status**: Status of the flagged event (`No Further Action`, `Business - Not Reviewed`, `False Positive`, `Action Required`).

### **Design Proposal for Automation**

The high-level workflow will be as follows:

1. **Receive and Parse Report**: 
   - The DLP report will be uploaded via an API endpoint.

2. **Data Filtering and Storage**: 
   - The report will be processed to extract relevant records based on the following criteria:
     - Records with `Status` values of 'Action Required' and ‘Business - Not Reviewed’ will be saved to MongoDB.
     - `Sender` values will be parsed to extract the employee ID (e.g., `U801568` from `WinNT://AD-ENT/U801568`).
     - If the `Sender` is an IP address (e.g., `10.46.37.567`), further investigation will be required, as the user cannot be determined.

3. **Email Notification**: 
   - For each user, an email will be sent explaining that sensitive data was exposed during Copilot use and advising them to avoid doing so in the future.
   - The email will include a link to documentation on best practices for using GitHub Copilot safely.

4. **Track Repeat Offenders**: 
   - MongoDB will store data on user offenses.
   - If a user repeatedly exposes sensitive data, an email will be triggered to our internal team at `abc@def.com` for corrective action.

### **1. API Design for Report Processing of DLP Reports and Notifications**

#### **1.1 Report Upload API**

- **Endpoint**: `/uploadReport`
- **Input**: CSV or XLSX file containing the weekly DLP report.
- **Processing**:
  - Parse the report and extract relevant fields (e.g., Date, Sender, Severity, Status).
  - For each row:
    - Extract `empId` from the Sender field.
    - Check if the Status is either "Action Required" or "Business - Not Reviewed."
    - Store the data in MongoDB if it meets the criteria.
- **Output**: HTTP 200 OK response once data is successfully processed.

#### **1.2 Storing in MongoDB**

We store relevant infraction data to allow tracking of both single incidents and repeated offenses.

**Schema**:
```java
@Document(collection = "github-copilot-dlp-infraction-logs")
public class GitHubCopilotDLPInfractionLog {

    @Id
    private String id;
    private String employeeId;
    private String email;
    private List<InfractionRecord> infractionRecords = new ArrayList<>();
    private int totalInfractionCount;   // Total number of infractions recorded
    private LocalDateTime lastInfractionDate;  // Date of the most recent infraction
    private boolean flaggedForReview;  // Indicates whether the user has been flagged for further action
}

public class InfractionRecord {

    private LocalDateTime infractionDate;
    private String severity;
    private String status;
}
```

**Sample MongoDB Document**:
```json
{
    "_id": "607c191e810c19729de860ea",
    "employeeId": "U801568",
    "email": "john.doe@example.com",
    "infractionRecords": [
        {
            "infractionDate": "2024-09-01T12:00:00Z",
            "severity": "High",
            "status": "Action Required"
        },
        {
            "infractionDate": "2024-09-05T15:00:00Z",
            "severity": "Medium",
            "status": "Business - Not Reviewed"
        }
    ],
    "totalInfractionCount": 2,
    "lastInfractionDate": "2024-09-05T15:00:00Z",
    "flaggedForReview": true
}
```

**Key Fields**:
- **employeeId**: The ID of the employee who committed the infraction.
- **email**: User email fetched using internal API (getEmpInfo/{empId}).
- **infractionRecords**: A list of individual infraction events, including details such as the date, severity, and status.
- **totalInfractionCount**: The total number of infractions recorded for this employee.
- **lastInfractionDate**: The date of the most recent infraction.
- **flaggedForReview**: A boolean flag to indicate whether the user has exceeded the infraction threshold and should be flagged for further review.

#### **1.3 Email Notification System**

Once the report is processed and saved, the system triggers an email notification to the users involved in data exposure.

**Template: Email to Users**

### **2. Spring Boot Scheduler for Aggregation**

The scheduler runs weekly to check for users who have exceeded the infraction threshold. It flags these users and sends an email listing all the flagged users' IDs to our team for immediate action.

**Email Template: Escalation Email to Internal Team**

### **3. Email Content and Template**

- **Email to Users**:
  - **Subject**: "Important: Sensitive Data Exposure Detected"
  - **Body**:
    ```
    Dear [User],

    Our monitoring system detected that sensitive data was exposed while using GitHub Copilot on [Date].

    To ensure the protection of our customer data and compliance with internal security policies, it is mandatory that you review our documentation on how to use GitHub Copilot safely. Please avoid using Copilot when files containing customer information or sensitive data are open.

    You are required to read the documentation available here: [Link to Documentation].

    Thank you for your immediate attention to this matter.

    Best regards,
    [Your Team Name]
    ```

- **Escalation Email to Internal Team**:
  - **Subject**: "Alert: Repeated Exposure of Sensitive Data Detected"
  - **Body**:
    ```
    Hi Team,

    Our system has detected that several users have met or exceeded the threshold for sensitive data exposure to GitHub Copilot. The affected users are listed below: [Users].

    Please review these incidents and implement the necessary corrective measures.

    Thank you for your attention to this matter.

    Best regards,
    [Your Team Name]
    ```

### **Considerations and Next Steps**

1. **Handling IP Address in Reports**:
   - In some cases, the `Sender` field in the report may contain an IP address instead of a user ID, making it difficult to determine the responsible employee. We will flag these instances and suggest working with the DLP team for further investigation.

2. **Severity Levels**:
   - The DLP reports currently categorize severity as either `Low` or `Info`. If additional severity levels are introduced in the future, we will collaborate with the DLP team to adjust the handling and notification process accordingly.

3. **Training Material**:
   - We are preparing mandatory training material on our internal LMS portal. Once the training is available, all users who repeatedly expose sensitive data will be required to complete the training.

4. **Documentation Link**:
   - Ensure the documentation on using GitHub Copilot safely is up to date and available via the link included in the emails.

### **Conclusion**

By automating the process of handling DLP reports and notifying users of sensitive data exposure, we aim to enhance data security and ensure compliance with our internal policies. The outlined system will help us track and manage Copilot usage effectively, providing timely feedback to users and reducing the risk of future exposures.
