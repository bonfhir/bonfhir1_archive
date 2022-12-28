export const OperationParameterUse = {
  resourceType: "CodeSystem",
  id: "operation-parameter-use",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>OperationParameterUse</h2>\n      \n      <div>\n        \n        <p>Whether an operation parameter is an input or an output parameter.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/operation-parameter-use defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">in\n            \n            <a name="operation-parameter-use-in"> </a>\n          \n          </td>\n          \n          <td>In</td>\n          \n          <td>This is an input parameter.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">out\n            \n            <a name="operation-parameter-use-out"> </a>\n          \n          </td>\n          \n          <td>Out</td>\n          \n          <td>This is an output parameter.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
  ],
  url: "http://hl7.org/fhir/operation-parameter-use",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.509",
    },
  ],
  version: "4.3.0",
  name: "OperationParameterUse",
  title: "OperationParameterUse",
  status: "active",
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
    "Whether an operation parameter is an input or an output parameter.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/operation-parameter-use",
  content: "complete",
  concept: [
    { code: "in", display: "In", definition: "This is an input parameter." },
    { code: "out", display: "Out", definition: "This is an output parameter." },
  ],
};
