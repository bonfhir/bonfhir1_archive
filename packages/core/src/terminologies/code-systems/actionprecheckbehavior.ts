/**
 * Defines selection frequency behavior for an action or group.
 * http://hl7.org/fhir/action-precheck-behavior
 */
export const ActionPrecheckBehaviorCodeSystem = {
  resourceType: "CodeSystem",
  id: "action-precheck-behavior",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://hl7.org/fhir/action-precheck-behavior defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">yes\n            \n            <a name="action-precheck-behavior-yes"> </a>\n          \n          </td>\n          \n          <td>Yes</td>\n          \n          <td>An action with this behavior is one of the most frequent action that is, or should be, included by an end user, for the particular context in which the action occurs. The system displaying the action to the end user should consider &quot;pre-checking&quot; such an action as a convenience for the user.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">no\n            \n            <a name="action-precheck-behavior-no"> </a>\n          \n          </td>\n          \n          <td>No</td>\n          \n          <td>An action with this behavior is one of the less frequent actions included by the end user, for the particular context in which the action occurs. The system displaying the actions to the end user would typically not &quot;pre-check&quot; such an action.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 3,
    },
  ],
  url: "http://hl7.org/fhir/action-precheck-behavior",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.806",
    },
  ],
  version: "4.3.0",
  name: "ActionPrecheckBehavior",
  title: "ActionPrecheckBehavior",
  status: "draft",
  experimental: false,
  date: "2021-01-05T10:01:24+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Defines selection frequency behavior for an action or group.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/action-precheck-behavior",
  content: "complete",
  concept: [
    {
      code: "yes",
      display: "Yes",
      definition:
        'An action with this behavior is one of the most frequent action that is, or should be, included by an end user, for the particular context in which the action occurs. The system displaying the action to the end user should consider "pre-checking" such an action as a convenience for the user.',
    },
    {
      code: "no",
      display: "No",
      definition:
        'An action with this behavior is one of the less frequent actions included by the end user, for the particular context in which the action occurs. The system displaying the actions to the end user would typically not "pre-check" such an action.',
    },
  ],
};
