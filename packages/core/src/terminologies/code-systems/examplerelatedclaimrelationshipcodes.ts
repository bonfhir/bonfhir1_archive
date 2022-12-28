export const ExampleRelatedClaimRelationshipCodes = {
  resourceType: "CodeSystem",
  id: "related-claim-relationship",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-relatedclaimrelationship defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">prior<a name="related-claim-relationship-prior"> </a></td><td>Prior Claim</td><td>A prior claim instance for the same intended suite of services.</td></tr><tr><td style="white-space:nowrap">associated<a name="related-claim-relationship-associated"> </a></td><td>Associated Claim</td><td>A claim for a different suite of services which is related the suite claimed here.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-relatedclaimrelationship",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1159",
    },
  ],
  version: "4.3.0",
  name: "ExampleRelatedClaimRelationshipCodes",
  title: "Example Related Claim Relationship Codes",
  status: "draft",
  experimental: false,
  description:
    "This value set includes sample Related Claim Relationship codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "prior",
      display: "Prior Claim",
      definition:
        "A prior claim instance for the same intended suite of services.",
    },
    {
      code: "associated",
      display: "Associated Claim",
      definition:
        "A claim for a different suite of services which is related the suite claimed here.",
    },
  ],
};
