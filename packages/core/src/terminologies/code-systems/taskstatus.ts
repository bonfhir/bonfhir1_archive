export const TaskStatus = {
  resourceType: "CodeSystem",
  id: "task-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>TaskStatus</h2>\n      \n      <div>\n        \n        <p>The current status of the task.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/task-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">draft\n            \n            <a name="task-status-draft"> </a>\n          \n          </td>\n          \n          <td>Draft</td>\n          \n          <td>The task is not yet ready to be acted upon.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">requested\n            \n            <a name="task-status-requested"> </a>\n          \n          </td>\n          \n          <td>Requested</td>\n          \n          <td>The task is ready to be acted upon and action is sought.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">received\n            \n            <a name="task-status-received"> </a>\n          \n          </td>\n          \n          <td>Received</td>\n          \n          <td>A potential performer has claimed ownership of the task and is evaluating whether to perform it.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">accepted\n            \n            <a name="task-status-accepted"> </a>\n          \n          </td>\n          \n          <td>Accepted</td>\n          \n          <td>The potential performer has agreed to execute the task but has not yet started work.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">rejected\n            \n            <a name="task-status-rejected"> </a>\n          \n          </td>\n          \n          <td>Rejected</td>\n          \n          <td>The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ready\n            \n            <a name="task-status-ready"> </a>\n          \n          </td>\n          \n          <td>Ready</td>\n          \n          <td>The task is ready to be performed, but no action has yet been taken.  Used in place of requested/received/accepted/rejected when request assignment and acceptance is a given.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">cancelled\n            \n            <a name="task-status-cancelled"> </a>\n          \n          </td>\n          \n          <td>Cancelled</td>\n          \n          <td>The task was not completed.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">in-progress\n            \n            <a name="task-status-in-progress"> </a>\n          \n          </td>\n          \n          <td>In Progress</td>\n          \n          <td>The task has been started but is not yet complete.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">on-hold\n            \n            <a name="task-status-on-hold"> </a>\n          \n          </td>\n          \n          <td>On Hold</td>\n          \n          <td>The task has been started but work has been paused.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">failed\n            \n            <a name="task-status-failed"> </a>\n          \n          </td>\n          \n          <td>Failed</td>\n          \n          <td>The task was attempted but could not be completed due to some error.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">completed\n            \n            <a name="task-status-completed"> </a>\n          \n          </td>\n          \n          <td>Completed</td>\n          \n          <td>The task has been completed.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            <a name="task-status-entered-in-error"> </a>\n          \n          </td>\n          \n          <td>Entered in Error</td>\n          \n          <td>The task should never have existed and is retained only because of the possibility it may have used.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/task-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.791",
    },
  ],
  version: "4.3.0",
  name: "TaskStatus",
  title: "TaskStatus",
  status: "draft",
  experimental: false,
  date: "2021-01-17T07:06:13+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "The current status of the task.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/task-status",
  content: "complete",
  concept: [
    {
      code: "draft",
      display: "Draft",
      definition: "The task is not yet ready to be acted upon.",
    },
    {
      code: "requested",
      display: "Requested",
      definition: "The task is ready to be acted upon and action is sought.",
    },
    {
      code: "received",
      display: "Received",
      definition:
        "A potential performer has claimed ownership of the task and is evaluating whether to perform it.",
    },
    {
      code: "accepted",
      display: "Accepted",
      definition:
        "The potential performer has agreed to execute the task but has not yet started work.",
    },
    {
      code: "rejected",
      display: "Rejected",
      definition:
        "The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action.",
    },
    {
      code: "ready",
      display: "Ready",
      definition:
        "The task is ready to be performed, but no action has yet been taken.  Used in place of requested/received/accepted/rejected when request assignment and acceptance is a given.",
    },
    {
      code: "cancelled",
      display: "Cancelled",
      definition: "The task was not completed.",
    },
    {
      code: "in-progress",
      display: "In Progress",
      definition: "The task has been started but is not yet complete.",
    },
    {
      code: "on-hold",
      display: "On Hold",
      definition: "The task has been started but work has been paused.",
    },
    {
      code: "failed",
      display: "Failed",
      definition:
        "The task was attempted but could not be completed due to some error.",
    },
    {
      code: "completed",
      display: "Completed",
      definition: "The task has been completed.",
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition:
        "The task should never have existed and is retained only because of the possibility it may have used.",
    },
  ],
};
