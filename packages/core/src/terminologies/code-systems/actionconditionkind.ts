/**
 * Defines the kinds of conditions that can appear on actions.
 * http://hl7.org/fhir/action-condition-kind
 */
export const ActionConditionKindCodeSystem = {
  resourceType: "CodeSystem",
  id: "action-condition-kind",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://hl7.org/fhir/action-condition-kind defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">applicability\n            \n            <a name="action-condition-kind-applicability"> </a>\n          \n          </td>\n          \n          <td>Applicability</td>\n          \n          <td>The condition describes whether or not a given action is applicable.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">start\n            \n            <a name="action-condition-kind-start"> </a>\n          \n          </td>\n          \n          <td>Start</td>\n          \n          <td>The condition is a starting condition for the action.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">stop\n            \n            <a name="action-condition-kind-stop"> </a>\n          \n          </td>\n          \n          <td>Stop</td>\n          \n          <td>The condition is a stop, or exit condition for the action.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/action-condition-kind",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.816",
    },
  ],
  version: "4.3.0",
  name: "ActionConditionKind",
  title: "ActionConditionKind",
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
  description: "Defines the kinds of conditions that can appear on actions.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/action-condition-kind",
  content: "complete",
  concept: [
    {
      code: "applicability",
      display: "Applicability",
      definition:
        "The condition describes whether or not a given action is applicable.",
    },
    {
      code: "start",
      display: "Start",
      definition: "The condition is a starting condition for the action.",
    },
    {
      code: "stop",
      display: "Stop",
      definition: "The condition is a stop, or exit condition for the action.",
    },
  ],
};
