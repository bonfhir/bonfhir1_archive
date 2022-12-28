/**
 * Ability of the primary source to push updates/alerts
 * http://hl7.org/fhir/verificationresult-can-push-updates
 */
export const canpushupdatesCodeSystem = {
  resourceType: "CodeSystem",
  id: "verificationresult-can-push-updates",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/verificationresult-can-push-updates defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">yes<a name="verificationresult-can-push-updates-yes"> </a></td><td>Yes</td></tr><tr><td style="white-space:nowrap">no<a name="verificationresult-can-push-updates-no"> </a></td><td>No</td></tr><tr><td style="white-space:nowrap">undetermined<a name="verificationresult-can-push-updates-undetermined"> </a></td><td>Undetermined</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://hl7.org/fhir/verificationresult-can-push-updates",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.897",
    },
  ],
  version: "4.3.0",
  name: "can-push-updates",
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
  description: "Ability of the primary source to push updates/alerts",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/can-push-updates",
  content: "complete",
  concept: [
    { code: "yes", display: "Yes" },
    { code: "no", display: "No" },
    { code: "undetermined", display: "Undetermined" },
  ],
};
