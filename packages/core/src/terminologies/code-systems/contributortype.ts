/**
 * The type of contributor.
 * http://hl7.org/fhir/contributor-type
 */
export const ContributorTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "contributor-type",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/contributor-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">author<a name="contributor-type-author"> </a></td><td>Author</td><td>An author of the content of the module.</td></tr><tr><td style="white-space:nowrap">editor<a name="contributor-type-editor"> </a></td><td>Editor</td><td>An editor of the content of the module.</td></tr><tr><td style="white-space:nowrap">reviewer<a name="contributor-type-reviewer"> </a></td><td>Reviewer</td><td>A reviewer of the content of the module.</td></tr><tr><td style="white-space:nowrap">endorser<a name="contributor-type-endorser"> </a></td><td>Endorser</td><td>An endorser of the content of the module.</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/contributor-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.94",
    },
  ],
  version: "4.3.0",
  name: "ContributorType",
  title: "ContributorType",
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
  description: "The type of contributor.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/contributor-type",
  content: "complete",
  concept: [
    {
      code: "author",
      display: "Author",
      definition: "An author of the content of the module.",
    },
    {
      code: "editor",
      display: "Editor",
      definition: "An editor of the content of the module.",
    },
    {
      code: "reviewer",
      display: "Reviewer",
      definition: "A reviewer of the content of the module.",
    },
    {
      code: "endorser",
      display: "Endorser",
      definition: "An endorser of the content of the module.",
    },
  ],
};
