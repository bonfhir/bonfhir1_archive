export const ActionRequiredBehavior = {
  resourceType: "CodeSystem",
  id: "action-required-behavior",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://hl7.org/fhir/action-required-behavior defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">must\n            \n            <a name="action-required-behavior-must"> </a>\n          \n          </td>\n          \n          <td>Must</td>\n          \n          <td>An action with this behavior must be included in the actions processed by the end user; the end user SHALL NOT choose not to include this action.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">could\n            \n            <a name="action-required-behavior-could"> </a>\n          \n          </td>\n          \n          <td>Could</td>\n          \n          <td>An action with this behavior may be included in the set of actions processed by the end user.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">must-unless-documented\n            \n            <a name="action-required-behavior-must-unless-documented"> </a>\n          \n          </td>\n          \n          <td>Must Unless Documented</td>\n          \n          <td>An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/action-required-behavior",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.804",
    },
  ],
  version: "4.3.0",
  name: "ActionRequiredBehavior",
  title: "ActionRequiredBehavior",
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
  description:
    "Defines expectations around whether an action or action group is required.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/action-required-behavior",
  content: "complete",
  concept: [
    {
      code: "must",
      display: "Must",
      definition:
        "An action with this behavior must be included in the actions processed by the end user; the end user SHALL NOT choose not to include this action.",
    },
    {
      code: "could",
      display: "Could",
      definition:
        "An action with this behavior may be included in the set of actions processed by the end user.",
    },
    {
      code: "must-unless-documented",
      display: "Must Unless Documented",
      definition:
        "An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included.",
    },
  ],
};
