/**
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 * http://hl7.org/fhir/care-plan-activity-status
 */
export const CarePlanActivityStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "care-plan-activity-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <h2>CarePlanActivityStatus</h2>\n      \n      \n      <div>\n        \n        \n        <p>Codes that reflect the current state of a care plan activity within its overall life cycle.</p>\n\n      \n      \n      </div>\n      \n      \n      <p>This code system http://hl7.org/fhir/care-plan-activity-status defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        \n        <tr>\n          \n          \n          <td>\n            \n            \n            <b>Lvl</b>\n          \n          \n          </td>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">not-started\n            \n            \n            <a name="care-plan-activity-status-not-started"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Not Started</td>\n          \n          \n          <td>Care plan activity is planned but no action has yet been taken.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">scheduled\n            \n            \n            <a name="care-plan-activity-status-scheduled"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Scheduled</td>\n          \n          \n          <td>Appointment or other booking has occurred but activity has not yet begun.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">in-progress\n            \n            \n            <a name="care-plan-activity-status-in-progress"> </a>\n          \n          \n          </td>\n          \n          \n          <td>In Progress</td>\n          \n          \n          <td>Care plan activity has been started but is not yet complete.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">on-hold\n            \n            \n            <a name="care-plan-activity-status-on-hold"> </a>\n          \n          \n          </td>\n          \n          \n          <td>On Hold</td>\n          \n          \n          <td>Care plan activity was started but has temporarily ceased with an expectation of resumption at a future time.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">completed\n            \n            \n            <a name="care-plan-activity-status-completed"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Completed</td>\n          \n          \n          <td>Care plan activity has been completed (more or less) as planned.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">cancelled\n            \n            \n            <a name="care-plan-activity-status-cancelled"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Cancelled</td>\n          \n          \n          <td>The planned care plan activity has been withdrawn.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  stopped\n            \n            \n            <a name="care-plan-activity-status-stopped"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Stopped</td>\n          \n          \n          <td>The planned care plan activity has been ended prior to completion after the activity was started.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">unknown\n            \n            \n            <a name="care-plan-activity-status-unknown"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Unknown</td>\n          \n          \n          <td>The current state of the care plan activity is not known.  Note: This concept is not to be used for &quot;other&quot; - one of the listed statuses is presumed to apply, but the authoring/source system does not know which one.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            \n            <a name="care-plan-activity-status-entered-in-error"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Entered in Error</td>\n          \n          \n          <td>Care plan activity was entered in error and voided.</td>\n        \n        \n        </tr>\n      \n      \n      </table>\n    \n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
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
  url: "http://hl7.org/fhir/care-plan-activity-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.147",
    },
  ],
  version: "4.3.0",
  name: "CarePlanActivityStatus",
  title: "CarePlanActivityStatus",
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
  description:
    "Codes that reflect the current state of a care plan activity within its overall life cycle.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/care-plan-activity-status",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "not-started",
      display: "Not Started",
      definition:
        "Care plan activity is planned but no action has yet been taken.",
    },
    {
      code: "scheduled",
      display: "Scheduled",
      definition:
        "Appointment or other booking has occurred but activity has not yet begun.",
    },
    {
      code: "in-progress",
      display: "In Progress",
      definition:
        "Care plan activity has been started but is not yet complete.",
    },
    {
      code: "on-hold",
      display: "On Hold",
      definition:
        "Care plan activity was started but has temporarily ceased with an expectation of resumption at a future time.",
    },
    {
      code: "completed",
      display: "Completed",
      definition:
        "Care plan activity has been completed (more or less) as planned.",
    },
    {
      code: "cancelled",
      display: "Cancelled",
      definition: "The planned care plan activity has been withdrawn.",
      concept: [
        {
          code: "stopped",
          display: "Stopped",
          definition:
            "The planned care plan activity has been ended prior to completion after the activity was started.",
        },
      ],
    },
    {
      code: "unknown",
      display: "Unknown",
      definition:
        'The current state of the care plan activity is not known.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which one.',
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition: "Care plan activity was entered in error and voided.",
    },
  ],
};
