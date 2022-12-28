export const HandlingConditionSet = {
  resourceType: "CodeSystem",
  id: "handling-condition",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>HandlingConditionSet</h2>\n      \n      <div>\n        \n        <p>Set of handling instructions prior testing of the specimen.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/handling-condition defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">room\n            \n            <a name="handling-condition-room"> </a>\n          \n          </td>\n          \n          <td>room temperature</td>\n          \n          <td>room temperature.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">refrigerated\n            \n            <a name="handling-condition-refrigerated"> </a>\n          \n          </td>\n          \n          <td>refrigerated</td>\n          \n          <td>refrigerated temperature.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">frozen\n            \n            <a name="handling-condition-frozen"> </a>\n          \n          </td>\n          \n          <td>frozen</td>\n          \n          <td>frozen temperature.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/handling-condition",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1259",
    },
  ],
  version: "4.3.0",
  name: "HandlingConditionSet",
  title: "HandlingConditionSet",
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
  description: "Set of handling instructions prior testing of the specimen.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/handling-condition",
  content: "complete",
  concept: [
    {
      code: "room",
      display: "room temperature",
      definition: "room temperature.",
    },
    {
      code: "refrigerated",
      display: "refrigerated",
      definition: "refrigerated temperature.",
    },
    { code: "frozen", display: "frozen", definition: "frozen temperature." },
  ],
};
