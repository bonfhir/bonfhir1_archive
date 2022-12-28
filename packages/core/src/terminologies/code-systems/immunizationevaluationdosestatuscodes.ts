/**
 * This code system supports describing the validity of a dose relative to a particular recommended schedule.
 * http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status
 */
export const ImmunizationEvaluationDoseStatusCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "immunization-evaluation-dose-status",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">valid<a name="immunization-evaluation-dose-status-valid"> </a></td><td>Valid</td><td>The dose counts toward fulfilling a path to immunity for a patient, providing protection against the target disease.</td></tr><tr><td style="white-space:nowrap">notvalid<a name="immunization-evaluation-dose-status-notvalid"> </a></td><td>Not valid</td><td>The dose does not count toward fulfilling a path to immunity for a patient.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pher",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1102",
    },
  ],
  version: "4.3.0",
  name: "ImmunizationEvaluationDoseStatusCodes",
  title: "Immunization Evaluation Dose Status codes",
  status: "draft",
  experimental: false,
  description:
    "This code system supports describing the validity of a dose relative to a particular recommended schedule.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "valid",
      display: "Valid",
      definition:
        "The dose counts toward fulfilling a path to immunity for a patient, providing protection against the target disease.",
    },
    {
      code: "notvalid",
      display: "Not valid",
      definition:
        "The dose does not count toward fulfilling a path to immunity for a patient.",
    },
  ],
};
