/**
 * This example value set defines a set of codes that can be used to indicate the status of the subject within the encounter
 * http://terminology.hl7.org/ValueSet/encounter-subject-status
 */
export const EncounterSubjectStatusCode = {
  /**
   * Arrived
   */
  Arrived: "arrived",

  /**
   * Triaged
   */
  Triaged: "triaged",

  /**
   * Receiving Care
   */
  ReceivingCare: "receiving-care",

  /**
   * On Leave
   */
  OnLeave: "on-leave",

  /**
   * Departed
   */
  Departed: "departed",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EncounterSubjectStatusCode =
  typeof EncounterSubjectStatusCode[keyof typeof EncounterSubjectStatusCode];
