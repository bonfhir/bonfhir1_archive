export const failureaction = {
  resourceType: "CodeSystem",
  id: "verificationresult-failure-action",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/verificationresult-failure-action defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">fatal<a name="verificationresult-failure-action-fatal"> </a></td><td>Fatal</td></tr><tr><td style="white-space:nowrap">warn<a name="verificationresult-failure-action-warn"> </a></td><td>Warning</td></tr><tr><td style="white-space:nowrap">rec-only<a name="verificationresult-failure-action-rec-only"> </a></td><td>Record only</td></tr><tr><td style="white-space:nowrap">none<a name="verificationresult-failure-action-none"> </a></td><td>None</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://hl7.org/fhir/verificationresult-failure-action",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.891",
    },
  ],
  version: "4.3.0",
  name: "failure-action",
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
  description: "The result if validation fails",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/failure-action",
  content: "complete",
  concept: [
    { code: "fatal", display: "Fatal" },
    { code: "warn", display: "Warning" },
    { code: "rec-only", display: "Record only" },
    { code: "none", display: "None" },
  ],
};
