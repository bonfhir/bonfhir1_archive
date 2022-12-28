export const ExampleClaimSubTypeCodes = {
  resourceType: "CodeSystem",
  id: "claim-subtype",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-claimsubtype defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">ortho<a name="claim-subtype-ortho"> </a></td><td>Orthodontic Claim</td><td>A claim for Orthodontic Services.</td></tr><tr><td style="white-space:nowrap">emergency<a name="claim-subtype-emergency"> </a></td><td>Emergency Claim</td><td>A claim for emergency services.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-claimsubtype",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1158",
    },
  ],
  version: "4.3.0",
  name: "ExampleClaimSubTypeCodes",
  title: "Example Claim SubType Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Claim SubType codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "ortho",
      display: "Orthodontic Claim",
      definition: "A claim for Orthodontic Services.",
    },
    {
      code: "emergency",
      display: "Emergency Claim",
      definition: "A claim for emergency services.",
    },
  ],
};
