/**
 * This value set includes sample Contract Subtype codes.
 * http://hl7.org/fhir/contract-subtype
 */
export const ContractSubtypeCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "contract-subtype",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/contract-subtype defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">disclosure-ca<a name="contract-subtype-disclosure-ca"> </a></td><td>Disclosure-CA</td><td>Canadian health information disclosure policy.</td></tr><tr><td style="white-space:nowrap">disclosure-us<a name="contract-subtype-disclosure-us"> </a></td><td>Disclosure-US</td><td>United States health information disclosure policy.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://hl7.org/fhir/contract-subtype",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "ContractSubtypeCodes",
  title: "Contract Subtype Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Contract Subtype codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "disclosure-ca",
      display: "Disclosure-CA",
      definition: "Canadian health information disclosure policy.",
    },
    {
      code: "disclosure-us",
      display: "Disclosure-US",
      definition: "United States health information disclosure policy.",
    },
  ],
};
