/**
 * Type for quality report.
 * http://hl7.org/fhir/quality-type
 */
export const qualityTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "quality-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>qualityType</h2>\n      \n      <div>\n        \n        <p>Type for quality report.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/quality-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">indel\n            \n            <a name="quality-type-indel"> </a>\n          \n          </td>\n          \n          <td>INDEL Comparison</td>\n          \n          <td>INDEL Comparison.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">snp\n            \n            <a name="quality-type-snp"> </a>\n          \n          </td>\n          \n          <td>SNP Comparison</td>\n          \n          <td>SNP Comparison.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">unknown\n            \n            <a name="quality-type-unknown"> </a>\n          \n          </td>\n          \n          <td>UNKNOWN Comparison</td>\n          \n          <td>UNKNOWN Comparison.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cg",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/quality-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.229",
    },
  ],
  version: "4.3.0",
  name: "qualityType",
  title: "qualityType",
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
  description: "Type for quality report.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/quality-type",
  content: "complete",
  concept: [
    {
      code: "indel",
      display: "INDEL Comparison",
      definition: "INDEL Comparison.",
    },
    { code: "snp", display: "SNP Comparison", definition: "SNP Comparison." },
    {
      code: "unknown",
      display: "UNKNOWN Comparison",
      definition: "UNKNOWN Comparison.",
    },
  ],
};
