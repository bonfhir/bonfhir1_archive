export const SubscriberRelationshipCodes = {
  resourceType: "CodeSystem",
  id: "subscriber-relationship",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/subscriber-relationship defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">child<a name="subscriber-relationship-child"> </a></td><td>Child</td><td>The Beneficiary is a child of the Subscriber</td></tr><tr><td style="white-space:nowrap">parent<a name="subscriber-relationship-parent"> </a></td><td>Parent</td><td>The Beneficiary is a parent of the Subscriber</td></tr><tr><td style="white-space:nowrap">spouse<a name="subscriber-relationship-spouse"> </a></td><td>Spouse</td><td>The Beneficiary is a spouse or equivalent of the Subscriber</td></tr><tr><td style="white-space:nowrap">common<a name="subscriber-relationship-common"> </a></td><td>Common Law Spouse</td><td>The Beneficiary is a common law spouse or equivalent of the Subscriber</td></tr><tr><td style="white-space:nowrap">other<a name="subscriber-relationship-other"> </a></td><td>Other</td><td>The Beneficiary has some other relationship the Subscriber</td></tr><tr><td style="white-space:nowrap">self<a name="subscriber-relationship-self"> </a></td><td>Self</td><td>The Beneficiary is the Subscriber</td></tr><tr><td style="white-space:nowrap">injured<a name="subscriber-relationship-injured"> </a></td><td>Injured Party</td><td>The Beneficiary is covered under insurance of the subscriber due to an injury.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1386",
    },
  ],
  version: "4.3.0",
  name: "SubscriberRelationshipCodes",
  title: "Subscriber Relationship Codes",
  status: "draft",
  experimental: false,
  publisher: "Financial Management",
  contact: [{ telecom: [{ system: "url", value: "http://hl7.org/fhir" }] }],
  description:
    "This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).",
  copyright: "This is an extensible set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "child",
      display: "Child",
      definition: "The Beneficiary is a child of the Subscriber",
    },
    {
      code: "parent",
      display: "Parent",
      definition: "The Beneficiary is a parent of the Subscriber",
    },
    {
      code: "spouse",
      display: "Spouse",
      definition: "The Beneficiary is a spouse or equivalent of the Subscriber",
    },
    {
      code: "common",
      display: "Common Law Spouse",
      definition:
        "The Beneficiary is a common law spouse or equivalent of the Subscriber",
    },
    {
      code: "other",
      display: "Other",
      definition: "The Beneficiary has some other relationship the Subscriber",
    },
    {
      code: "self",
      display: "Self",
      definition: "The Beneficiary is the Subscriber",
    },
    {
      code: "injured",
      display: "Injured Party",
      definition:
        "The Beneficiary is covered under insurance of the subscriber due to an injury.",
    },
  ],
};
