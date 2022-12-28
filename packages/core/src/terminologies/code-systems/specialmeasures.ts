/**
 * Extra measures defined for a Medicinal Product, such as requirement to conduct post-authorisation studies.
 * http://hl7.org/fhir/medicinal-product-special-measures
 */
export const SpecialMeasuresCodeSystem = {
  resourceType: "CodeSystem",
  id: "medicinal-product-special-measures",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/medicinal-product-special-measures defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">Post-authorisationStudies<a name="medicinal-product-special-measures-Post-authorisationStudies"> </a></td><td>Requirement to conduct post-authorisation studies</td><td>Requirement to conduct post-authorisation studies</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/medicinal-product-special-measures",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1567",
    },
  ],
  version: "4.3.0",
  name: "SpecialMeasures",
  title: "SpecialMeasures",
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
  description:
    "Extra measures defined for a Medicinal Product, such as requirement to conduct post-authorisation studies.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medicinal-product-special-measures",
  content: "complete",
  concept: [
    {
      code: "Post-authorisationStudies",
      display: "Requirement to conduct post-authorisation studies",
      definition: "Requirement to conduct post-authorisation studies",
    },
  ],
};
