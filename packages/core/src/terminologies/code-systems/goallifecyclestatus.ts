/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 * http://hl7.org/fhir/goal-status
 */
export const GoalLifecycleStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "goal-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <h2>GoalLifecycleStatus</h2>\n      \n      \n      <div>\n        \n        \n        <p>Codes that reflect the current state of a goal and whether the goal is still being targeted.</p>\n\n      \n      \n      </div>\n      \n      \n      <p>This code system http://hl7.org/fhir/goal-status defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        \n        <tr>\n          \n          \n          <td>\n            \n            \n            <b>Lvl</b>\n          \n          \n          </td>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">proposed\n            \n            \n            <a name="goal-status-proposed"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Proposed</td>\n          \n          \n          <td>A goal is proposed for this patient.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">planned\n            \n            \n            <a name="goal-status-planned"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Planned</td>\n          \n          \n          <td>A goal is planned for this patient.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">accepted\n            \n            \n            <a name="goal-status-accepted"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Accepted</td>\n          \n          \n          <td>A proposed goal was accepted or acknowledged.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  active\n            \n            \n            <a name="goal-status-active"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Active</td>\n          \n          \n          <td>The goal is being sought actively.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  on-hold\n            \n            \n            <a name="goal-status-on-hold"> </a>\n          \n          \n          </td>\n          \n          \n          <td>On Hold</td>\n          \n          \n          <td>The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  completed\n            \n            \n            <a name="goal-status-completed"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Completed</td>\n          \n          \n          <td>The goal is no longer being sought.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">cancelled\n            \n            \n            <a name="goal-status-cancelled"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Cancelled</td>\n          \n          \n          <td>The goal has been abandoned.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            \n            <a name="goal-status-entered-in-error"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Entered in Error</td>\n          \n          \n          <td>The goal was entered in error and voided.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">rejected\n            \n            \n            <a name="goal-status-rejected"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Rejected</td>\n          \n          \n          <td>A proposed goal was rejected.</td>\n        \n        \n        </tr>\n      \n      \n      </table>\n    \n    \n    </div>',
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
  url: "http://hl7.org/fhir/goal-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.272",
    },
  ],
  version: "4.3.0",
  name: "GoalLifecycleStatus",
  title: "GoalLifecycleStatus",
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
    "Codes that reflect the current state of a goal and whether the goal is still being targeted.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/goal-status",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "proposed",
      display: "Proposed",
      definition: "A goal is proposed for this patient.",
    },
    {
      code: "planned",
      display: "Planned",
      definition: "A goal is planned for this patient.",
    },
    {
      code: "accepted",
      display: "Accepted",
      definition: "A proposed goal was accepted or acknowledged.",
      concept: [
        {
          code: "active",
          display: "Active",
          definition: "The goal is being sought actively.",
        },
        {
          code: "on-hold",
          display: "On Hold",
          definition:
            "The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.",
        },
        {
          code: "completed",
          display: "Completed",
          definition: "The goal is no longer being sought.",
        },
      ],
    },
    {
      code: "cancelled",
      display: "Cancelled",
      definition: "The goal has been abandoned.",
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition: "The goal was entered in error and voided.",
    },
    {
      code: "rejected",
      display: "Rejected",
      definition: "A proposed goal was rejected.",
    },
  ],
};
