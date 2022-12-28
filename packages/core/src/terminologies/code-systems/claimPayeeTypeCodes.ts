export const ClaimPayeeTypeCodes = {
  resourceType: "CodeSystem",
  id: "payeetype",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/payeetype defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">subscriber<a name="payeetype-subscriber"> </a></td><td>Subscriber</td><td>The subscriber (policy holder) will be reimbursed.</td></tr><tr><td style="white-space:nowrap">provider<a name="payeetype-provider"> </a></td><td>Provider</td><td>Any benefit payable will be paid to the provider (Assignment of Benefit).</td></tr><tr><td style="white-space:nowrap">other<a name="payeetype-other"> </a></td><td>Provider</td><td>Any benefit payable will be paid to a third party such as a guarrantor.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/payeetype",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1050",
    },
  ],
  version: "4.3.0",
  name: "Claim Payee Type Codes",
  status: "draft",
  experimental: true,
  publisher: "Financial Management",
  contact: [{ telecom: [{ system: "url", value: "http://hl7.org/fhir" }] }],
  description: "This value set includes sample Payee Type codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/payeetype",
  content: "complete",
  concept: [
    {
      code: "subscriber",
      display: "Subscriber",
      definition: "The subscriber (policy holder) will be reimbursed.",
    },
    {
      code: "provider",
      display: "Provider",
      definition:
        "Any benefit payable will be paid to the provider (Assignment of Benefit).",
    },
    {
      code: "other",
      display: "Provider",
      definition:
        "Any benefit payable will be paid to a third party such as a guarrantor.",
    },
  ],
};
