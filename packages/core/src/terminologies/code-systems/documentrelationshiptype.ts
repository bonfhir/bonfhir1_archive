/**
 * The type of relationship between documents.
 * http://hl7.org/fhir/document-relationship-type
 */
export const DocumentRelationshipTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "document-relationship-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>DocumentRelationshipType</h2>\n      \n      <div>\n        \n        <p>The type of relationship between documents.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/document-relationship-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">replaces\n            \n            <a name="document-relationship-type-replaces"> </a>\n          \n          </td>\n          \n          <td>Replaces</td>\n          \n          <td>This document logically replaces or supersedes the target document.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">transforms\n            \n            <a name="document-relationship-type-transforms"> </a>\n          \n          </td>\n          \n          <td>Transforms</td>\n          \n          <td>This document was generated by transforming the target document (e.g. format or language conversion).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">signs\n            \n            <a name="document-relationship-type-signs"> </a>\n          \n          </td>\n          \n          <td>Signs</td>\n          \n          <td>This document is a signature of the target document.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">appends\n            \n            <a name="document-relationship-type-appends"> </a>\n          \n          </td>\n          \n          <td>Appends</td>\n          \n          <td>This document adds additional information to the target document.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "sd",
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
  url: "http://hl7.org/fhir/document-relationship-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.245",
    },
  ],
  version: "4.3.0",
  name: "DocumentRelationshipType",
  title: "DocumentRelationshipType",
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
  description: "The type of relationship between documents.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/document-relationship-type",
  content: "complete",
  concept: [
    {
      code: "replaces",
      display: "Replaces",
      definition:
        "This document logically replaces or supersedes the target document.",
    },
    {
      code: "transforms",
      display: "Transforms",
      definition:
        "This document was generated by transforming the target document (e.g. format or language conversion).",
    },
    {
      code: "signs",
      display: "Signs",
      definition: "This document is a signature of the target document.",
    },
    {
      code: "appends",
      display: "Appends",
      definition:
        "This document adds additional information to the target document.",
    },
  ],
};
