/**
 * An interaction between a patient and healthcare participant(s) for the purpose of providing patient service(s) or assessing the health status of a patient. For example, outpatient visit to multiple departments, home health support (including physical therapy), inpatient hospital stay, emergency room visit, field visit (e.g., traffic accident), office visit, occupational therapy, telephone call.
 * http://terminology.hl7.org/ValueSet/v3-ActClassEncounter
 */
export const ActClassEncounterCode = {
  /**
   * encounter
   */
  encounter: "ENC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassEncounterCode =
  typeof ActClassEncounterCode[keyof typeof ActClassEncounterCode];
