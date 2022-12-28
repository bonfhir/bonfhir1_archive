export const DefinitionUseCodes = {
  resourceType: "CodeSystem",
  id: "definition-use",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/definition-use defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">fhir-structure<a name="definition-use-fhir-structure"> </a></td><td>FHIR Structure</td><td>This structure is defined as part of the base FHIR Specification</td></tr><tr><td style="white-space:nowrap">custom-resource<a name="definition-use-custom-resource"> </a></td><td>Custom Resource</td><td>This structure is intended to be treated like a FHIR resource (e.g. on the FHIR API)</td></tr><tr><td style="white-space:nowrap">dam<a name="definition-use-dam"> </a></td><td>Domain Analysis Model</td><td>This structure captures an analysis of a domain</td></tr><tr><td style="white-space:nowrap">wire-format<a name="definition-use-wire-format"> </a></td><td>Wire Format</td><td>This structure represents and existing structure (e.g. CDA, HL7 v2)</td></tr><tr><td style="white-space:nowrap">archetype<a name="definition-use-archetype"> </a></td><td>Domain Analysis Model</td><td>This structure captures an analysis of a domain</td></tr><tr><td style="white-space:nowrap">template<a name="definition-use-template"> </a></td><td>Template</td><td>This structure is a template (n.b: \'template\' has many meanings)</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/definition-use",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1191",
    },
  ],
  version: "4.3.0",
  name: "DefinitionUseCodes",
  title: "Structure Definition Use Codes / Keywords",
  status: "active",
  experimental: false,
  description: "Structure Definition Use Codes / Keywords",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/definition-use",
  content: "complete",
  concept: [
    {
      code: "fhir-structure",
      display: "FHIR Structure",
      definition:
        "This structure is defined as part of the base FHIR Specification",
    },
    {
      code: "custom-resource",
      display: "Custom Resource",
      definition:
        "This structure is intended to be treated like a FHIR resource (e.g. on the FHIR API)",
    },
    {
      code: "dam",
      display: "Domain Analysis Model",
      definition: "This structure captures an analysis of a domain",
    },
    {
      code: "wire-format",
      display: "Wire Format",
      definition:
        "This structure represents and existing structure (e.g. CDA, HL7 v2)",
    },
    {
      code: "archetype",
      display: "Domain Analysis Model",
      definition: "This structure captures an analysis of a domain",
    },
    {
      code: "template",
      display: "Template",
      definition:
        "This structure is a template (n.b: 'template' has many meanings)",
    },
  ],
};
