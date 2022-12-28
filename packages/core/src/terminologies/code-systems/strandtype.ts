/**
 * Type for strand.
 * http://hl7.org/fhir/strand-type
 */
export const strandTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "strand-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>strandType</h2>\n      \n      <div>\n        \n        <p>Type for strand.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/strand-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">watson\n            \n            <a name="strand-type-watson"> </a>\n          \n          </td>\n          \n          <td>Watson strand of referenceSeq</td>\n          \n          <td>Watson strand of reference sequence.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">crick\n            \n            <a name="strand-type-crick"> </a>\n          \n          </td>\n          \n          <td>Crick strand of referenceSeq</td>\n          \n          <td>Crick strand of reference sequence.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/strand-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.986",
    },
  ],
  version: "4.3.0",
  name: "strandType",
  title: "strandType",
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
  description: "Type for strand.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/strand-type",
  content: "complete",
  concept: [
    {
      code: "watson",
      display: "Watson strand of referenceSeq",
      definition: "Watson strand of reference sequence.",
    },
    {
      code: "crick",
      display: "Crick strand of referenceSeq",
      definition: "Crick strand of reference sequence.",
    },
  ],
};
