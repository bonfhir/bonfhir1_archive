/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 * http://hl7.org/fhir/questionnaire-enable-behavior
 */
export const EnableWhenBehaviorCodeSystem = {
  resourceType: "CodeSystem",
  id: "questionnaire-enable-behavior",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>EnableWhenBehavior</h2>\n      \n      <div>\n        \n        <p>Controls how multiple enableWhen values are interpreted -  whether all or any must be true.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/questionnaire-enable-behavior defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">all\n            \n            <a name="questionnaire-enable-behavior-all"> </a>\n          \n          </td>\n          \n          <td>All</td>\n          \n          <td>Enable the question when all the enableWhen criteria are satisfied.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">any\n            \n            <a name="questionnaire-enable-behavior-any"> </a>\n          \n          </td>\n          \n          <td>Any</td>\n          \n          <td>Enable the question when any of the enableWhen criteria are satisfied.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
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
  url: "http://hl7.org/fhir/questionnaire-enable-behavior",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1008",
    },
  ],
  version: "4.3.0",
  name: "EnableWhenBehavior",
  title: "EnableWhenBehavior",
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
    "Controls how multiple enableWhen values are interpreted -  whether all or any must be true.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/questionnaire-enable-behavior",
  content: "complete",
  concept: [
    {
      code: "all",
      display: "All",
      definition:
        "Enable the question when all the enableWhen criteria are satisfied.",
    },
    {
      code: "any",
      display: "Any",
      definition:
        "Enable the question when any of the enableWhen criteria are satisfied.",
    },
  ],
};
