/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 * http://terminology.hl7.org/CodeSystem/diagnosis-role
 */
export const DiagnosisRoleCodeSystem = {
  resourceType: "CodeSystem",
  id: "diagnosis-role",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/diagnosis-role defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">AD<a name="diagnosis-role-AD"> </a></td><td>Admission diagnosis</td></tr><tr><td style="white-space:nowrap">DD<a name="diagnosis-role-DD"> </a></td><td>Discharge diagnosis</td></tr><tr><td style="white-space:nowrap">CC<a name="diagnosis-role-CC"> </a></td><td>Chief complaint</td></tr><tr><td style="white-space:nowrap">CM<a name="diagnosis-role-CM"> </a></td><td>Comorbidity diagnosis</td></tr><tr><td style="white-space:nowrap">pre-op<a name="diagnosis-role-pre-op"> </a></td><td>pre-op diagnosis</td></tr><tr><td style="white-space:nowrap">post-op<a name="diagnosis-role-post-op"> </a></td><td>post-op diagnosis</td></tr><tr><td style="white-space:nowrap">billing<a name="diagnosis-role-billing"> </a></td><td>Billing</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1054",
    },
  ],
  version: "4.3.0",
  name: "DiagnosisRole",
  status: "draft",
  experimental: false,
  publisher: "FHIR Project team",
  contact: [{ telecom: [{ system: "url", value: "http://hl7.org/fhir" }] }],
  description:
    "This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/diagnosis-role",
  content: "complete",
  concept: [
    { code: "AD", display: "Admission diagnosis" },
    { code: "DD", display: "Discharge diagnosis" },
    { code: "CC", display: "Chief complaint" },
    { code: "CM", display: "Comorbidity diagnosis" },
    { code: "pre-op", display: "pre-op diagnosis" },
    { code: "post-op", display: "post-op diagnosis" },
    { code: "billing", display: "Billing" },
  ],
};
