export const CriteriaNotExistsBehavior = {
  resourceType: "CodeSystem",
  id: "subscriptiontopic-cr-behavior",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://hl7.org/fhir/subscriptiontopic-cr-behavior defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">test-passes\n            \n            <a name="subscriptiontopic-cr-behavior-test-passes"> </a>\n          \n          </td>\n          \n          <td>test passes</td>\n          \n          <td>The requested conditional statement will pass if a matching state does not exist (e.g., previous state during create).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">test-fails\n            \n            <a name="subscriptiontopic-cr-behavior-test-fails"> </a>\n          \n          </td>\n          \n          <td>test fails</td>\n          \n          <td>The requested conditional statement will fail if a matching state does not exist (e.g., previous state during create).</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 0,
    },
  ],
  url: "http://hl7.org/fhir/subscriptiontopic-cr-behavior",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "CriteriaNotExistsBehavior",
  title: "CriteriaNotExistsBehavior",
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
    "Behavior a server can exhibit when a criteria state does not exist (e.g., state prior to a create or after a delete).",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/subscriptiontopic-cr-behavior",
  content: "complete",
  concept: [
    {
      code: "test-passes",
      display: "test passes",
      definition:
        "The requested conditional statement will pass if a matching state does not exist (e.g., previous state during create).",
    },
    {
      code: "test-fails",
      display: "test fails",
      definition:
        "The requested conditional statement will fail if a matching state does not exist (e.g., previous state during create).",
    },
  ],
};
