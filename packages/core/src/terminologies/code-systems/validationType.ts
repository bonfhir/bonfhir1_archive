/**
 * What the target is validated against
 * http://hl7.org/fhir/verificationresult-validation-type
 */
export const validationtypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "verificationresult-validation-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/verificationresult-validation-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">nothing<a name="verificationresult-validation-type-nothing"> </a></td><td>Nothing</td></tr><tr><td style="white-space:nowrap">primary<a name="verificationresult-validation-type-primary"> </a></td><td>Primary Source</td></tr><tr><td style="white-space:nowrap">multiple<a name="verificationresult-validation-type-multiple"> </a></td><td>Multiple Sources</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://hl7.org/fhir/verificationresult-validation-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.887",
    },
  ],
  version: "4.3.0",
  name: "validation-type",
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
  description: "What the target is validated against",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/validation-type",
  content: "complete",
  concept: [
    { code: "nothing", display: "Nothing" },
    { code: "primary", display: "Primary Source" },
    { code: "multiple", display: "Multiple Sources" },
  ],
};
