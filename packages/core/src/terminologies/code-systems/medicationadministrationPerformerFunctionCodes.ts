/**
 *
 * http://terminology.hl7.org/CodeSystem/med-admin-perform-function
 */
export const MedicationAdministrationPerformerFunctionCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "med-admin-perform-function",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/med-admin-perform-function defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">performer<a name="med-admin-perform-function-performer"> </a></td><td>Performer</td><td>A person, non-person living subject, organization or device that who actually and principally carries out the action</td></tr><tr><td style="white-space:nowrap">verifier<a name="med-admin-perform-function-verifier"> </a></td><td>Verifier</td><td>A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.</td></tr><tr><td style="white-space:nowrap">witness<a name="med-admin-perform-function-witness"> </a></td><td>Witness</td><td>A person witnessing the action happening without doing anything. A witness is not necessarily aware, much less approves of anything stated in the service event. Example for a witness is students watching an operation or an advanced directive witness.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/med-admin-perform-function",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1112",
    },
  ],
  version: "4.3.0",
  name: "MedicationAdministration Performer Function Codes",
  status: "draft",
  experimental: false,
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/med-admin-perform-function",
  content: "complete",
  concept: [
    {
      code: "performer",
      display: "Performer",
      definition:
        "A person, non-person living subject, organization or device that who actually and principally carries out the action",
    },
    {
      code: "verifier",
      display: "Verifier",
      definition:
        "A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.",
    },
    {
      code: "witness",
      display: "Witness",
      definition:
        "A person witnessing the action happening without doing anything. A witness is not necessarily aware, much less approves of anything stated in the service event. Example for a witness is students watching an operation or an advanced directive witness.",
    },
  ],
};
