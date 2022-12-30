/**
 * This example value set defines a set of codes that can be used to indicate the status of the subject within the encounter
 * http://terminology.hl7.org/ValueSet/encounter-subject-status
 */
export const EncounterSubjectStatusCode = {
  /**
   * Arrived
   */
  arrived: "arrived",

  /**
   * Triaged
   */
  triaged: "triaged",

  /**
   * Receiving Care
   */
  "receiving-care": "receiving-care",

  /**
   * On Leave
   */
  "on-leave": "on-leave",

  /**
   * Departed
   */
  departed: "departed",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EncounterSubjectStatusCode =
  typeof EncounterSubjectStatusCode[keyof typeof EncounterSubjectStatusCode];
