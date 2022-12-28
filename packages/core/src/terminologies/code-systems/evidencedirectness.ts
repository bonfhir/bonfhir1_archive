/**
 * The quality of how direct the match is.
 * http://terminology.hl7.org/CodeSystem/directness
 */
export const EvidenceDirectnessCodeSystem = {
  resourceType: "CodeSystem",
  id: "directness",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/directness defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">low\n            \n            <a name="directness-low"> </a>\n          \n          </td>\n          \n          <td>Low quality match between observed and intended variable</td>\n          \n          <td>Low matching quality between observed and intended variable, so very serious concern for indirectness in evidence interpretation.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">moderate\n            \n            <a name="directness-moderate"> </a>\n          \n          </td>\n          \n          <td>Moderate quality match between observed and intended variable</td>\n          \n          <td>Moderate matching quality between observed and intended variable, so serious concern for indirectness in evidence interpretation.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">high\n            \n            <a name="directness-high"> </a>\n          \n          </td>\n          \n          <td>High quality match between observed and intended variable</td>\n          \n          <td>High matching quality between observed and intended variable, so little concern for indirectness in evidence interpretation.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">exact\n            \n            <a name="directness-exact"> </a>\n          \n          </td>\n          \n          <td>Exact match between observed and intended variable</td>\n          \n          <td>Exact matching quality between observed and intended variable, so no concern for indirectness in evidence interpretation.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 1,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/directness",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1459",
    },
  ],
  version: "4.3.0",
  name: "EvidenceDirectness",
  title: "EvidenceDirectness",
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
  description: "The quality of how direct the match is.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/directness",
  content: "complete",
  concept: [
    {
      code: "low",
      display: "Low quality match between observed and intended variable",
      definition:
        "Low matching quality between observed and intended variable, so very serious concern for indirectness in evidence interpretation.",
    },
    {
      code: "moderate",
      display: "Moderate quality match between observed and intended variable",
      definition:
        "Moderate matching quality between observed and intended variable, so serious concern for indirectness in evidence interpretation.",
    },
    {
      code: "high",
      display: "High quality match between observed and intended variable",
      definition:
        "High matching quality between observed and intended variable, so little concern for indirectness in evidence interpretation.",
    },
    {
      code: "exact",
      display: "Exact match between observed and intended variable",
      definition:
        "Exact matching quality between observed and intended variable, so no concern for indirectness in evidence interpretation.",
    },
  ],
};
