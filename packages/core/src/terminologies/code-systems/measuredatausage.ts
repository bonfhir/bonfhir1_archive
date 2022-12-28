/**
 * The intended usage for supplemental data elements in the measure.
 * http://terminology.hl7.org/CodeSystem/measure-data-usage
 */
export const MeasureDataUsageCodeSystem = {
  resourceType: "CodeSystem",
  id: "measure-data-usage",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/measure-data-usage defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">supplemental-data\n            \n            <a name="measure-data-usage-supplemental-data"> </a>\n          \n          </td>\n          \n          <td>Supplemental Data</td>\n          \n          <td>The data is intended to be provided as additional information alongside the measure results.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">risk-adjustment-factor\n            \n            <a name="measure-data-usage-risk-adjustment-factor"> </a>\n          \n          </td>\n          \n          <td>Risk Adjustment Factor</td>\n          \n          <td>The data is intended to be used to calculate and apply a risk adjustment model for the measure.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://terminology.hl7.org/CodeSystem/measure-data-usage",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1234",
    },
  ],
  version: "4.3.0",
  name: "MeasureDataUsage",
  title: "MeasureDataUsage",
  status: "draft",
  experimental: false,
  date: "2020-12-28T16:55:11+11:00",
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
    "The intended usage for supplemental data elements in the measure.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/measure-data-usage",
  content: "complete",
  concept: [
    {
      code: "supplemental-data",
      display: "Supplemental Data",
      definition:
        "The data is intended to be provided as additional information alongside the measure results.",
    },
    {
      code: "risk-adjustment-factor",
      display: "Risk Adjustment Factor",
      definition:
        "The data is intended to be used to calculate and apply a risk adjustment model for the measure.",
    },
  ],
};
