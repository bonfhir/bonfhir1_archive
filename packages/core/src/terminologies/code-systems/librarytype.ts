/**
 * The type of knowledge asset this library contains.
 * http://terminology.hl7.org/CodeSystem/library-type
 */
export const LibraryTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "library-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/library-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">logic-library\n            \n            <a name="library-type-logic-library"> </a>\n          \n          </td>\n          \n          <td>Logic Library</td>\n          \n          <td>The resource is a shareable library of formalized knowledge.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">model-definition\n            \n            <a name="library-type-model-definition"> </a>\n          \n          </td>\n          \n          <td>Model Definition</td>\n          \n          <td>The resource is a definition of an information model.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">asset-collection\n            \n            <a name="library-type-asset-collection"> </a>\n          \n          </td>\n          \n          <td>Asset Collection</td>\n          \n          <td>The resource is a collection of knowledge assets.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">module-definition\n            \n            <a name="library-type-module-definition"> </a>\n          \n          </td>\n          \n          <td>Module Definition</td>\n          \n          <td>The resource defines the dependencies, parameters, and data requirements for a particular module or evaluation context.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 3,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/library-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1230",
    },
  ],
  version: "4.3.0",
  name: "LibraryType",
  title: "LibraryType",
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
  description: "The type of knowledge asset this library contains.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/library-type",
  content: "complete",
  concept: [
    {
      code: "logic-library",
      display: "Logic Library",
      definition:
        "The resource is a shareable library of formalized knowledge.",
    },
    {
      code: "model-definition",
      display: "Model Definition",
      definition: "The resource is a definition of an information model.",
    },
    {
      code: "asset-collection",
      display: "Asset Collection",
      definition: "The resource is a collection of knowledge assets.",
    },
    {
      code: "module-definition",
      display: "Module Definition",
      definition:
        "The resource defines the dependencies, parameters, and data requirements for a particular module or evaluation context.",
    },
  ],
};
