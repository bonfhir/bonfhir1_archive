export const RelatedArtifactType = {
  resourceType: "CodeSystem",
  id: "related-artifact-type",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/related-artifact-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">documentation<a name="related-artifact-type-documentation"> </a></td><td>Documentation</td><td>Additional documentation for the knowledge resource. This would include additional instructions on usage as well as additional information on clinical context or appropriateness.</td></tr><tr><td style="white-space:nowrap">justification<a name="related-artifact-type-justification"> </a></td><td>Justification</td><td>A summary of the justification for the knowledge resource including supporting evidence, relevant guidelines, or other clinically important information. This information is intended to provide a way to make the justification for the knowledge resource available to the consumer of interventions or results produced by the knowledge resource.</td></tr><tr><td style="white-space:nowrap">citation<a name="related-artifact-type-citation"> </a></td><td>Citation</td><td>Bibliographic citation for papers, references, or other relevant material for the knowledge resource. This is intended to allow for citation of related material, but that was not necessarily specifically prepared in connection with this knowledge resource.</td></tr><tr><td style="white-space:nowrap">predecessor<a name="related-artifact-type-predecessor"> </a></td><td>Predecessor</td><td>The previous version of the knowledge resource.</td></tr><tr><td style="white-space:nowrap">successor<a name="related-artifact-type-successor"> </a></td><td>Successor</td><td>The next version of the knowledge resource.</td></tr><tr><td style="white-space:nowrap">derived-from<a name="related-artifact-type-derived-from"> </a></td><td>Derived From</td><td>The knowledge resource is derived from the related artifact. This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but is modified to capture either a different set of overall requirements, or a more specific set of requirements such as those involved in a particular institution or clinical setting.</td></tr><tr><td style="white-space:nowrap">depends-on<a name="related-artifact-type-depends-on"> </a></td><td>Depends On</td><td>The knowledge resource depends on the given related artifact.</td></tr><tr><td style="white-space:nowrap">composed-of<a name="related-artifact-type-composed-of"> </a></td><td>Composed Of</td><td>The knowledge resource is composed of the given related artifact.</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/related-artifact-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.100",
    },
  ],
  version: "4.3.0",
  name: "RelatedArtifactType",
  title: "RelatedArtifactType",
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
  description: "The type of relationship to the related artifact.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/related-artifact-type",
  content: "complete",
  concept: [
    {
      code: "documentation",
      display: "Documentation",
      definition:
        "Additional documentation for the knowledge resource. This would include additional instructions on usage as well as additional information on clinical context or appropriateness.",
    },
    {
      code: "justification",
      display: "Justification",
      definition:
        "A summary of the justification for the knowledge resource including supporting evidence, relevant guidelines, or other clinically important information. This information is intended to provide a way to make the justification for the knowledge resource available to the consumer of interventions or results produced by the knowledge resource.",
    },
    {
      code: "citation",
      display: "Citation",
      definition:
        "Bibliographic citation for papers, references, or other relevant material for the knowledge resource. This is intended to allow for citation of related material, but that was not necessarily specifically prepared in connection with this knowledge resource.",
    },
    {
      code: "predecessor",
      display: "Predecessor",
      definition: "The previous version of the knowledge resource.",
    },
    {
      code: "successor",
      display: "Successor",
      definition: "The next version of the knowledge resource.",
    },
    {
      code: "derived-from",
      display: "Derived From",
      definition:
        "The knowledge resource is derived from the related artifact. This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but is modified to capture either a different set of overall requirements, or a more specific set of requirements such as those involved in a particular institution or clinical setting.",
    },
    {
      code: "depends-on",
      display: "Depends On",
      definition:
        "The knowledge resource depends on the given related artifact.",
    },
    {
      code: "composed-of",
      display: "Composed Of",
      definition:
        "The knowledge resource is composed of the given related artifact.",
    },
  ],
};
