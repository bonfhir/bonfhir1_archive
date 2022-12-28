export const ReferenceVersionRules = {
  resourceType: "CodeSystem",
  id: "reference-version-rules",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/reference-version-rules defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">either<a name="reference-version-rules-either"> </a></td><td>Either Specific or independent</td><td>The reference may be either version independent or version specific.</td></tr><tr><td style="white-space:nowrap">independent<a name="reference-version-rules-independent"> </a></td><td>Version independent</td><td>The reference must be version independent.</td></tr><tr><td style="white-space:nowrap">specific<a name="reference-version-rules-specific"> </a></td><td>Version Specific</td><td>The reference must be version specific.</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/reference-version-rules",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.90",
    },
  ],
  version: "4.3.0",
  name: "ReferenceVersionRules",
  title: "ReferenceVersionRules",
  status: "active",
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
  description:
    "Whether a reference needs to be version specific or version independent, or whether either can be used.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/reference-version-rules",
  content: "complete",
  concept: [
    {
      code: "either",
      display: "Either Specific or independent",
      definition:
        "The reference may be either version independent or version specific.",
    },
    {
      code: "independent",
      display: "Version independent",
      definition: "The reference must be version independent.",
    },
    {
      code: "specific",
      display: "Version Specific",
      definition: "The reference must be version specific.",
    },
  ],
};
