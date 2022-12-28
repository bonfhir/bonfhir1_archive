export const CatalogEntryRelationType = {
  resourceType: "CodeSystem",
  id: "relation-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>CatalogEntryRelationType</h2>\n      \n      <div>\n        \n        <p>The type of relations between entries.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/relation-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">triggers\n            \n            <a name="relation-type-triggers"> </a>\n          \n          </td>\n          \n          <td>Triggers</td>\n          \n          <td>the related entry represents an activity that may be triggered by the current item.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">is-replaced-by\n            \n            <a name="relation-type-is-replaced-by"> </a>\n          \n          </td>\n          \n          <td>Replaced By</td>\n          \n          <td>the related entry represents an item that replaces the current retired item.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
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
  url: "http://hl7.org/fhir/relation-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1029",
    },
  ],
  version: "4.3.0",
  name: "CatalogEntryRelationType",
  title: "CatalogEntryRelationType",
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
  description: "The type of relations between entries.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/relation-type",
  content: "complete",
  concept: [
    {
      code: "triggers",
      display: "Triggers",
      definition:
        "the related entry represents an activity that may be triggered by the current item.",
    },
    {
      code: "is-replaced-by",
      display: "Replaced By",
      definition:
        "the related entry represents an item that replaces the current retired item.",
    },
  ],
};
