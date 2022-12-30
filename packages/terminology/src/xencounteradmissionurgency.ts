/**
 * The urgency for starting a patient encounter.

*Example:*Routine, urgent, emergency, and elective.
 * http://terminology.hl7.org/ValueSet/v3-xEncounterAdmissionUrgency
 */
export const XEncounterAdmissionUrgencyCode = {
  /**
   * elective
   */
  EL: "EL",

  /**
   * emergency
   */
  EM: "EM",

  /**
   * routine
   */
  R: "R",

  /**
   * urgent
   */
  UR: "UR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XEncounterAdmissionUrgencyCode =
  typeof XEncounterAdmissionUrgencyCode[keyof typeof XEncounterAdmissionUrgencyCode];
