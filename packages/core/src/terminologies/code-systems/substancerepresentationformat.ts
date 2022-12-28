/**
 *
 * http://hl7.org/fhir/substance-representation-format
 */
export const SubstanceRepresentationFormatCodeSystem = {
  resourceType: "CodeSystem",
  id: "substance-representation-format",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/substance-representation-format defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">InChI<a name="substance-representation-format-InChI"> </a></td><td>InChI</td></tr><tr><td style="white-space:nowrap">SMILES<a name="substance-representation-format-SMILES"> </a></td><td>SMILES</td></tr><tr><td style="white-space:nowrap">MOLFILE<a name="substance-representation-format-MOLFILE"> </a></td><td>MOLFILE</td></tr><tr><td style="white-space:nowrap">CDX<a name="substance-representation-format-CDX"> </a></td><td>CDX</td></tr><tr><td style="white-space:nowrap">SDF<a name="substance-representation-format-SDF"> </a></td><td>SDF</td></tr><tr><td style="white-space:nowrap">PDB<a name="substance-representation-format-PDB"> </a></td><td>PDB</td></tr><tr><td style="white-space:nowrap">mmCIF<a name="substance-representation-format-mmCIF"> </a></td><td>mmCIF</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/substance-representation-format",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1621",
    },
  ],
  version: "4.3.0",
  name: "SubstanceRepresentationFormat",
  title: "SubstanceRepresentationFormat",
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
  valueSet: "http://hl7.org/fhir/ValueSet/substance-representation-format",
  content: "complete",
  concept: [
    { code: "InChI", display: "InChI" },
    { code: "SMILES", display: "SMILES" },
    { code: "MOLFILE", display: "MOLFILE" },
    { code: "CDX", display: "CDX" },
    { code: "SDF", display: "SDF" },
    { code: "PDB", display: "PDB" },
    { code: "mmCIF", display: "mmCIF" },
  ],
};
