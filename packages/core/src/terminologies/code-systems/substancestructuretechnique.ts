/**
 *
 * http://hl7.org/fhir/substance-structure-technique
 */
export const SubstanceStructureTechniqueCodeSystem = {
  resourceType: "CodeSystem",
  id: "substance-structure-technique",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/substance-structure-technique defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">X-Ray<a name="substance-structure-technique-X-Ray"> </a></td><td>X-ray</td></tr><tr><td style="white-space:nowrap">HPLC<a name="substance-structure-technique-HPLC"> </a></td><td>HPLC</td></tr><tr><td style="white-space:nowrap">NMR<a name="substance-structure-technique-NMR"> </a></td><td>NMR</td></tr><tr><td style="white-space:nowrap">PeptideMapping<a name="substance-structure-technique-PeptideMapping"> </a></td><td>Peptide mapping</td></tr><tr><td style="white-space:nowrap">LigandBindingAssay<a name="substance-structure-technique-LigandBindingAssay"> </a></td><td>Ligand binding assay</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/substance-structure-technique",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1623",
    },
  ],
  version: "4.3.0",
  name: "SubstanceStructureTechnique",
  title: "SubstanceStructureTechnique",
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
  valueSet: "http://hl7.org/fhir/ValueSet/substance-structure-technique",
  content: "complete",
  concept: [
    { code: "X-Ray", display: "X-ray" },
    { code: "HPLC", display: "HPLC" },
    { code: "NMR", display: "NMR" },
    { code: "PeptideMapping", display: "Peptide mapping" },
    { code: "LigandBindingAssay", display: "Ligand binding assay" },
  ],
};
