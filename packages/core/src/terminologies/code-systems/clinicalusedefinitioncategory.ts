export const ClinicalUseDefinitionCategory = {
  resourceType: "CodeSystem",
  id: "clinical-use-definition-category",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/clinical-use-definition-category defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">Pregnancy<a name="clinical-use-definition-category-Pregnancy"> </a></td><td>Pregnancy and Lactation</td></tr><tr><td style="white-space:nowrap">Overdose<a name="clinical-use-definition-category-Overdose"> </a></td><td>Overdose</td></tr><tr><td style="white-space:nowrap">DriveAndMachines<a name="clinical-use-definition-category-DriveAndMachines"> </a></td><td>Effects on Ability to Drive and Use Machines</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "brr",
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
  url: "http://hl7.org/fhir/clinical-use-definition-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1647",
    },
  ],
  version: "4.3.0",
  name: "ClinicalUseDefinitionCategory",
  title: "ClinicalUseDefinitionCategory",
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
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/clinical-use-definition-category",
  content: "complete",
  concept: [
    { code: "Pregnancy", display: "Pregnancy and Lactation" },
    { code: "Overdose", display: "Overdose" },
    {
      code: "DriveAndMachines",
      display: "Effects on Ability to Drive and Use Machines",
    },
  ],
};
