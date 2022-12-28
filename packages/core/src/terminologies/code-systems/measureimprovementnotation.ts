export const MeasureImprovementNotation = {
  resourceType: "CodeSystem",
  id: "measure-improvement-notation",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/measure-improvement-notation defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">increase\n            \n            <a name="measure-improvement-notation-increase"> </a>\n          \n          </td>\n          \n          <td>Increased score indicates improvement</td>\n          \n          <td>Improvement is indicated as an increase in the score or measurement (e.g. Higher score indicates better quality).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">decrease\n            \n            <a name="measure-improvement-notation-decrease"> </a>\n          \n          </td>\n          \n          <td>Decreased score indicates improvement</td>\n          \n          <td>Improvement is indicated as a decrease in the score or measurement (e.g. Lower score indicates better quality).</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cqi",
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
  url: "http://terminology.hl7.org/CodeSystem/measure-improvement-notation",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1395",
    },
  ],
  version: "4.3.0",
  name: "MeasureImprovementNotation",
  title: "MeasureImprovementNotation",
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
    "Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/measure-improvement-notation",
  content: "complete",
  concept: [
    {
      code: "increase",
      display: "Increased score indicates improvement",
      definition:
        "Improvement is indicated as an increase in the score or measurement (e.g. Higher score indicates better quality).",
    },
    {
      code: "decrease",
      display: "Decreased score indicates improvement",
      definition:
        "Improvement is indicated as a decrease in the score or measurement (e.g. Lower score indicates better quality).",
    },
  ],
};
