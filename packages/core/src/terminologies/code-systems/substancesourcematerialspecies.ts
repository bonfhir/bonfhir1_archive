/**
 *
 * http://hl7.org/fhir/substance-source-material-species
 */
export const SubstanceSourceMaterialSpeciesCodeSystem = {
  resourceType: "CodeSystem",
  id: "substance-source-material-species",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/substance-source-material-species defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">GinkgoBiloba<a name="substance-source-material-species-GinkgoBiloba"> </a></td><td>Ginkgo biloba</td></tr><tr><td style="white-space:nowrap">OleaEuropaea<a name="substance-source-material-species-OleaEuropaea"> </a></td><td>Olea europaea</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/substance-source-material-species",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1629",
    },
  ],
  version: "4.3.0",
  name: "SubstanceSourceMaterialSpecies",
  title: "SubstanceSourceMaterialSpecies",
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
  valueSet: "http://hl7.org/fhir/ValueSet/substance-source-material-species",
  content: "complete",
  concept: [
    { code: "GinkgoBiloba", display: "Ginkgo biloba" },
    { code: "OleaEuropaea", display: "Olea europaea" },
  ],
};
