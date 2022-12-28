/**
 * The validation status of the target
 * http://hl7.org/fhir/verificationresult-status
 */
export const statusCodeSystem = {
  resourceType: "CodeSystem",
  id: "verificationresult-status",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/verificationresult-status defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">attested<a name="verificationresult-status-attested"> </a></td><td>Attested</td><td>***TODO***</td></tr><tr><td style="white-space:nowrap">validated<a name="verificationresult-status-validated"> </a></td><td>Validated</td><td>***TODO***</td></tr><tr><td style="white-space:nowrap">in-process<a name="verificationresult-status-in-process"> </a></td><td>In process</td><td>***TODO***</td></tr><tr><td style="white-space:nowrap">req-revalid<a name="verificationresult-status-req-revalid"> </a></td><td>Requires revalidation</td><td>***TODO***</td></tr><tr><td style="white-space:nowrap">val-fail<a name="verificationresult-status-val-fail"> </a></td><td>Validation failed</td><td>***TODO***</td></tr><tr><td style="white-space:nowrap">reval-fail<a name="verificationresult-status-reval-fail"> </a></td><td>Re-Validation failed</td><td>***TODO***</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://hl7.org/fhir/verificationresult-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.885",
    },
  ],
  version: "4.3.0",
  name: "status",
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
  description: "The validation status of the target",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/status",
  content: "complete",
  concept: [
    { code: "attested", display: "Attested", definition: "***TODO***" },
    { code: "validated", display: "Validated", definition: "***TODO***" },
    { code: "in-process", display: "In process", definition: "***TODO***" },
    {
      code: "req-revalid",
      display: "Requires revalidation",
      definition: "***TODO***",
    },
    {
      code: "val-fail",
      display: "Validation failed",
      definition: "***TODO***",
    },
    {
      code: "reval-fail",
      display: "Re-Validation failed",
      definition: "***TODO***",
    },
  ],
};
