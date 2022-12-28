/**
 * This value set includes a smattering of Network type codes.
 * http://terminology.hl7.org/CodeSystem/benefit-network
 */
export const NetworkTypeCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "benefit-network",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/benefit-network defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">in<a name="benefit-network-in"> </a></td><td>In Network</td><td>Services rendered by a Network provider</td></tr><tr><td style="white-space:nowrap">out<a name="benefit-network-out"> </a></td><td>Out of Network</td><td>Services rendered by a provider who is not in the Network</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/benefit-network",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1177",
    },
  ],
  version: "4.3.0",
  name: "NetworkTypeCodes",
  title: "Network Type Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes a smattering of Network type codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "in",
      display: "In Network",
      definition: "Services rendered by a Network provider",
    },
    {
      code: "out",
      display: "Out of Network",
      definition: "Services rendered by a provider who is not in the Network",
    },
  ],
};
