/**
 * The frequency with which the target must be validated
 * http://hl7.org/fhir/verificationresult-need
 */
export const needCodeSystem = {
  resourceType: "CodeSystem",
  id: "verificationresult-need",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/verificationresult-need defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">none<a name="verificationresult-need-none"> </a></td><td>None</td><td>***TODO***</td></tr><tr><td style="white-space:nowrap">initial<a name="verificationresult-need-initial"> </a></td><td>Initial</td><td>***TODO***</td></tr><tr><td style="white-space:nowrap">periodic<a name="verificationresult-need-periodic"> </a></td><td>Periodic</td><td>***TODO***</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://hl7.org/fhir/verificationresult-need",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.883",
    },
  ],
  version: "4.3.0",
  name: "need",
  status: "draft",
  experimental: false,
  date: "2018-06-05T14:06:02+00:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "The frequency with which the target must be validated",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/need",
  content: "complete",
  concept: [
    { code: "none", display: "None", definition: "***TODO***" },
    { code: "initial", display: "Initial", definition: "***TODO***" },
    { code: "periodic", display: "Periodic", definition: "***TODO***" },
  ],
};
