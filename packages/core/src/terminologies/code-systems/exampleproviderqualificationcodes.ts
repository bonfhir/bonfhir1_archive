/**
 * This value set includes sample Provider Qualification codes.
 * http://terminology.hl7.org/CodeSystem/ex-providerqualification
 */
export const ExampleProviderQualificationCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "provider-qualification",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-providerqualification defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">311405<a name="provider-qualification-311405"> </a></td><td>Dentist</td><td>Dentist General Practitioner (DDS, DDM).</td></tr><tr><td style="white-space:nowrap">604215<a name="provider-qualification-604215"> </a></td><td>Ophthalmologist</td><td>Ophthalmologist.</td></tr><tr><td style="white-space:nowrap">604210<a name="provider-qualification-604210"> </a></td><td>Optometrist</td><td>Optometrist.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-providerqualification",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1160",
    },
  ],
  version: "4.3.0",
  name: "ExampleProviderQualificationCodes",
  title: "Example Provider Qualification Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Provider Qualification codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "311405",
      display: "Dentist",
      definition: "Dentist General Practitioner (DDS, DDM).",
    },
    {
      code: "604215",
      display: "Ophthalmologist",
      definition: "Ophthalmologist.",
    },
    { code: "604210", display: "Optometrist", definition: "Optometrist." },
  ],
};
