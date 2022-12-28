/**
 *
 * http://terminology.hl7.org/CodeSystem/medicationknowledge-status
 */
export const MedicationKnowledgeStatusCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "medicationknowledge-status",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/medicationknowledge-status defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">active<a name="medicationknowledge-status-active"> </a></td><td>Active</td><td>The medication is available for use.</td></tr><tr><td style="white-space:nowrap">inactive<a name="medicationknowledge-status-inactive"> </a></td><td>Inactive</td><td>The medication is not available for use.</td></tr><tr><td style="white-space:nowrap">entered-in-error<a name="medicationknowledge-status-entered-in-error"> </a></td><td>Entered in Error</td><td>The medication was entered in error.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/medicationknowledge-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1336",
    },
  ],
  version: "4.3.0",
  name: "MedicationKnowledge Status Codes",
  status: "draft",
  experimental: false,
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medicationknowledge-status",
  content: "complete",
  concept: [
    {
      code: "active",
      display: "Active",
      definition: "The medication is available for use.",
    },
    {
      code: "inactive",
      display: "Inactive",
      definition: "The medication is not available for use.",
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition: "The medication was entered in error.",
    },
  ],
};
