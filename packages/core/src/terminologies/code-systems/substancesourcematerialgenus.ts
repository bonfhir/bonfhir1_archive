/**
 *
 * http://hl7.org/fhir/substance-source-material-genus
 */
export const SubstanceSourceMaterialGenusCodeSystem = {
  resourceType: "CodeSystem",
  id: "substance-source-material-genus",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/substance-source-material-genus defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">Mycobacterium<a name="substance-source-material-genus-Mycobacterium"> </a></td><td>Mycobacterium</td></tr><tr><td style="white-space:nowrap">InfluenzavirusA<a name="substance-source-material-genus-InfluenzavirusA"> </a></td><td>Influenza A virus</td></tr><tr><td style="white-space:nowrap">Ginkgo<a name="substance-source-material-genus-Ginkgo"> </a></td><td>Ginkgo</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/substance-source-material-genus",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1627",
    },
  ],
  version: "4.3.0",
  name: "SubstanceSourceMaterialGenus",
  title: "SubstanceSourceMaterialGenus",
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
  valueSet: "http://hl7.org/fhir/ValueSet/substance-source-material-genus",
  content: "complete",
  concept: [
    { code: "Mycobacterium", display: "Mycobacterium" },
    { code: "InfluenzavirusA", display: "Influenza A virus" },
    { code: "Ginkgo", display: "Ginkgo" },
  ],
};
