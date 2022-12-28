export const EpisodeOfCareType = {
  resourceType: "CodeSystem",
  id: "episodeofcare-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/episodeofcare-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">hacc<a name="episodeofcare-type-hacc"> </a></td><td>Home and Community Care</td></tr><tr><td style="white-space:nowrap">pac<a name="episodeofcare-type-pac"> </a></td><td>Post Acute Care</td></tr><tr><td style="white-space:nowrap">diab<a name="episodeofcare-type-diab"> </a></td><td>Post coordinated diabetes program</td></tr><tr><td style="white-space:nowrap">da<a name="episodeofcare-type-da"> </a></td><td>Drug and alcohol rehabilitation</td></tr><tr><td style="white-space:nowrap">cacp<a name="episodeofcare-type-cacp"> </a></td><td>Community-based aged care</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/episodeofcare-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1189",
    },
  ],
  version: "4.3.0",
  name: "EpisodeOfCareType",
  status: "draft",
  experimental: false,
  description:
    "This incomplete example codesystem defines a set of codes that can be used to express the usage type of an EpisodeOfCare record.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "hacc", display: "Home and Community Care" },
    { code: "pac", display: "Post Acute Care" },
    { code: "diab", display: "Post coordinated diabetes program" },
    { code: "da", display: "Drug and alcohol rehabilitation" },
    { code: "cacp", display: "Community-based aged care" },
  ],
};
