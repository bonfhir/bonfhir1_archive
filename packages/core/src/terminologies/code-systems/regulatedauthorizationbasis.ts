export const RegulatedAuthorizationBasis = {
  resourceType: "CodeSystem",
  id: "regulated-authorization-basis",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/regulated-authorization-basis defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">Full<a name="regulated-authorization-basis-Full"> </a></td><td>Full application</td></tr><tr><td style="white-space:nowrap">NewSubstance<a name="regulated-authorization-basis-NewSubstance"> </a></td><td>New active substance</td></tr><tr><td style="white-space:nowrap">KnownSubstance<a name="regulated-authorization-basis-KnownSubstance"> </a></td><td>Known active substance</td></tr><tr><td style="white-space:nowrap">SimilarBiological<a name="regulated-authorization-basis-SimilarBiological"> </a></td><td>Similar biological application</td></tr><tr><td style="white-space:nowrap">Well-establishedUse<a name="regulated-authorization-basis-Well-establishedUse"> </a></td><td>Well-established use application</td></tr><tr><td style="white-space:nowrap">TraditionalUse<a name="regulated-authorization-basis-TraditionalUse"> </a></td><td>Traditional use registration for herbal medicinal product application</td></tr><tr><td style="white-space:nowrap">Bibliographical<a name="regulated-authorization-basis-Bibliographical"> </a></td><td>Bibliographical application (stand-alone)</td></tr><tr><td style="white-space:nowrap">KnownHumanBlood<a name="regulated-authorization-basis-KnownHumanBlood"> </a></td><td>Known human blood/plasma derived ancillary medicinal substance</td></tr><tr><td style="white-space:nowrap">TemporaryUse<a name="regulated-authorization-basis-TemporaryUse"> </a></td><td>Authorisations for temporary use</td></tr><tr><td style="white-space:nowrap">ParallelTrade<a name="regulated-authorization-basis-ParallelTrade"> </a></td><td>Parallel traded products</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/regulated-authorization-basis",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1643",
    },
  ],
  version: "4.3.0",
  name: "RegulatedAuthorizationBasis",
  title: "RegulatedAuthorizationBasis",
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
  valueSet: "http://hl7.org/fhir/ValueSet/regulated-authorization-basis",
  content: "complete",
  concept: [
    { code: "Full", display: "Full application" },
    { code: "NewSubstance", display: "New active substance" },
    { code: "KnownSubstance", display: "Known active substance" },
    { code: "SimilarBiological", display: "Similar biological application" },
    {
      code: "Well-establishedUse",
      display: "Well-established use application",
    },
    {
      code: "TraditionalUse",
      display:
        "Traditional use registration for herbal medicinal product application",
    },
    {
      code: "Bibliographical",
      display: "Bibliographical application (stand-alone)",
    },
    {
      code: "KnownHumanBlood",
      display: "Known human blood/plasma derived ancillary medicinal substance",
    },
    { code: "TemporaryUse", display: "Authorisations for temporary use" },
    { code: "ParallelTrade", display: "Parallel traded products" },
  ],
};
