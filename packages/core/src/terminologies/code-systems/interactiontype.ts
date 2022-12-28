/**
 * A categorisation for an interaction between two substances.
 * http://hl7.org/fhir/interaction-type
 */
export const InteractionTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "interaction-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/interaction-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">drug-drug<a name="interaction-type-drug-drug"> </a></td><td>drug to drug interaction</td></tr><tr><td style="white-space:nowrap">drug-food<a name="interaction-type-drug-food"> </a></td><td>drug to food interaction</td></tr><tr><td style="white-space:nowrap">drug-test<a name="interaction-type-drug-test"> </a></td><td>drug to laboratory test interaction</td></tr><tr><td style="white-space:nowrap">other<a name="interaction-type-other"> </a></td><td>other interaction</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/interaction-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1663",
    },
  ],
  version: "4.3.0",
  name: "InteractionType",
  title: "InteractionType",
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
  description: "A categorisation for an interaction between two substances.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/interaction-type",
  content: "complete",
  concept: [
    { code: "drug-drug", display: "drug to drug interaction" },
    { code: "drug-food", display: "drug to food interaction" },
    { code: "drug-test", display: "drug to laboratory test interaction" },
    { code: "other", display: "other interaction" },
  ],
};
