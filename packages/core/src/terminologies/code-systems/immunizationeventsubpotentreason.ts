/**
 * This code system supports describing the reason why a dose is considered to be subpotent.
 * http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason
 */
export const ImmunizationEventSubpotentReasonCodeSystem = {
  resourceType: "CodeSystem",
  id: "immunization-subpotent-reason",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">partial<a name="immunization-subpotent-reason-partial"> </a></td><td>Partial Dose</td><td>The full volume of the dose was not administered to the patient.</td></tr><tr><td style="white-space:nowrap">coldchainbreak<a name="immunization-subpotent-reason-coldchainbreak"> </a></td><td>Cold Chain Break</td><td>The vaccine experienced a cold chain break.</td></tr><tr><td style="white-space:nowrap">recall<a name="immunization-subpotent-reason-recall"> </a></td><td>Manufacturer Recall</td><td>The vaccine was recalled by the manufacturer.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pher",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1098",
    },
  ],
  version: "4.3.0",
  name: "ImmunizationEventSubpotentReason",
  title: "Immunization Event Subpotent Reason",
  status: "draft",
  experimental: false,
  description:
    "This code system supports describing the reason why a dose is considered to be subpotent.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "partial",
      display: "Partial Dose",
      definition:
        "The full volume of the dose was not administered to the patient.",
    },
    {
      code: "coldchainbreak",
      display: "Cold Chain Break",
      definition: "The vaccine experienced a cold chain break.",
    },
    {
      code: "recall",
      display: "Manufacturer Recall",
      definition: "The vaccine was recalled by the manufacturer.",
    },
  ],
};
