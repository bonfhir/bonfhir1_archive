/**
 * A code that represents the preferred display order of the components of a human name.
 * http://terminology.hl7.org/CodeSystem/name-assembly-order
 */
export const HumanNameAssemblyOrderCodeSystem = {
  resourceType: "CodeSystem",
  id: "name-assembly-order",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/name-assembly-order defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">NL1<a name="name-assembly-order-NL1"> </a></td><td>Own Name</td></tr><tr><td style="white-space:nowrap">NL2<a name="name-assembly-order-NL2"> </a></td><td>Partner Name</td></tr><tr><td style="white-space:nowrap">NL3<a name="name-assembly-order-NL3"> </a></td><td>Partner Name followed by Maiden Name</td></tr><tr><td style="white-space:nowrap">NL4<a name="name-assembly-order-NL4"> </a></td><td>Own Name followed by Partner Name</td></tr></table></div>',
  },
  url: "http://terminology.hl7.org/CodeSystem/name-assembly-order",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1266",
    },
  ],
  version: "4.3.0",
  name: "HumanNameAssemblyOrder",
  title: "HumanNameAssemblyOrder",
  status: "draft",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
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
    "A code that represents the preferred display order of the components of a human name.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "NL1", display: "Own Name" },
    { code: "NL2", display: "Partner Name" },
    { code: "NL3", display: "Partner Name followed by Maiden Name" },
    { code: "NL4", display: "Own Name followed by Partner Name" },
  ],
};
