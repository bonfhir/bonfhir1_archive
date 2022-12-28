export const CitationClassificationType = {
  resourceType: "CodeSystem",
  id: "citation-classification-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/citation-classification-type defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        \n        <tr>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td style="white-space:nowrap">citation-source\n            \n            \n            <a name="citation-classification-type-citation-source"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Citation Source</td>\n          \n          \n          <td>Citation repository where this citation was created or copied from</td>\n        \n        \n        </tr>\n\t\t\n        <tr>\n          \n          \n          <td style="white-space:nowrap">medline-owner\n            \n            \n            <a name="citation-classification-type-medline-owner"> </a>\n          \n          \n          </td>\n          \n          \n          <td>MEDLINE Citation Owner</td>\n          \n          \n          <td>The party responsible for creating and validating the MEDLINE citation</td>\n        \n        \n        </tr>\n\t\t\n        <tr>\n          \n          \n          <td style="white-space:nowrap">fevir-platform-use\n            \n            \n            <a name="citation-classification-type-fevir-platform-use"> </a>\n          \n          \n          </td>\n          \n          \n          <td>FEvIR Platform Use</td>\n          \n          \n          <td>Used for Citation sharing on the Fast Evidence Interoperability Resources (FEvIR) Platform</td>\n        \n        \n        </tr>\n      \n      \n      </table>\n    \n    \n    </div>',
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
      valueInteger: 0,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/citation-classification-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "CitationClassificationType",
  title: "CitationClassificationType",
  status: "draft",
  experimental: false,
  date: "2021-03-11T10:55:11.085+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Citation classification type",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/citation-classification-type",
  content: "complete",
  concept: [
    {
      code: "citation-source",
      display: "Citation Source",
      definition:
        "Citation repository where this citation was created or copied from",
    },
    {
      code: "medline-owner",
      display: "MEDLINE Citation Owner",
      definition:
        "The party responsible for creating and validating the MEDLINE citation",
    },
    {
      code: "fevir-platform-use",
      display: "FEvIR Platform Use",
      definition:
        "Used for Citation sharing on the Fast Evidence Interoperability Resources (FEvIR) Platform",
    },
  ],
};
