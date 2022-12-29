/**
 * Value Set of codes that define the state of a care episode for a patient.
 * http://terminology.hl7.org/ValueSet/v2-0216
 */
export const Hl7VSPatientStatusCodeCode = {
  /**
   * Active Inpatient
   */
  ActiveInpatient: "AI",

  /**
   * Discharged Inpatient
   */
  DischargedInpatient: "DI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientStatusCodeCode =
  typeof Hl7VSPatientStatusCodeCode[keyof typeof Hl7VSPatientStatusCodeCode];
