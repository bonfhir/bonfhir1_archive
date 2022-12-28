/**
 * The possible sort directions, ascending or descending.
 * http://hl7.org/fhir/sort-direction
 */
export const SortDirectionCodeSystem = {
  resourceType: "CodeSystem",
  id: "sort-direction",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/sort-direction defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">ascending<a name="sort-direction-ascending"> </a></td><td>Ascending</td><td>Sort by the value ascending, so that lower values appear first.</td></tr><tr><td style="white-space:nowrap">descending<a name="sort-direction-descending"> </a></td><td>Descending</td><td>Sort by the value descending, so that lower values appear last.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://hl7.org/fhir/sort-direction",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.980",
    },
  ],
  version: "4.3.0",
  name: "SortDirection",
  title: "SortDirection",
  status: "draft",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "The possible sort directions, ascending or descending.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/sort-direction",
  content: "complete",
  concept: [
    {
      code: "ascending",
      display: "Ascending",
      definition:
        "Sort by the value ascending, so that lower values appear first.",
    },
    {
      code: "descending",
      display: "Descending",
      definition:
        "Sort by the value descending, so that lower values appear last.",
    },
  ],
};
