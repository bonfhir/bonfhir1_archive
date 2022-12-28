export const UndesirablEffectFrequency = {
  resourceType: "CodeSystem",
  id: "undesirable-effect-frequency",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/undesirable-effect-frequency defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">Common<a name="undesirable-effect-frequency-Common"> </a></td><td>Common</td></tr><tr><td style="white-space:nowrap">Uncommon<a name="undesirable-effect-frequency-Uncommon"> </a></td><td>Uncommon</td></tr><tr><td style="white-space:nowrap">Rare<a name="undesirable-effect-frequency-Rare"> </a></td><td>Rare</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/undesirable-effect-frequency",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1653",
    },
  ],
  version: "4.3.0",
  name: "UndesirablEffectFrequency",
  title: "UndesirablEffectFrequency",
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
    "A categorisation for a frequency of occurence of an undesirable effect.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/undesirable-effect-frequency",
  content: "complete",
  concept: [
    { code: "Common", display: "Common" },
    { code: "Uncommon", display: "Uncommon" },
    { code: "Rare", display: "Rare" },
  ],
};
