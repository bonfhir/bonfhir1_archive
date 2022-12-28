/**
 * Logical grouping of characteristics.
 * http://hl7.org/fhir/characteristic-combination
 */
export const CharacteristicCombinationCodeSystem = {
  resourceType: "CodeSystem",
  id: "characteristic-combination",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://hl7.org/fhir/characteristic-combination defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">intersection\n            \n            <a name="characteristic-combination-intersection"> </a>\n          \n          </td>\n          \n          <td>intersection</td>\n          \n          <td>Combine characteristics with AND.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">union\n            \n            <a name="characteristic-combination-union"> </a>\n          \n          </td>\n          \n          <td>union</td>\n          \n          <td>Combine characteristics with OR.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/characteristic-combination",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1528",
    },
  ],
  version: "4.3.0",
  name: "CharacteristicCombination",
  title: "CharacteristicCombination",
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
  description: "Logical grouping of characteristics.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/characteristic-combination",
  content: "complete",
  concept: [
    {
      code: "intersection",
      display: "intersection",
      definition: "Combine characteristics with AND.",
    },
    {
      code: "union",
      display: "union",
      definition: "Combine characteristics with OR.",
    },
  ],
};
