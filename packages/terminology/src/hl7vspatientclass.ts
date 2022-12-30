/**
 * Concepts used by systems to categorize patients by sites.
 * http://terminology.hl7.org/ValueSet/v2-0004
 */
export const Hl7VSPatientClassCode = {
  /**
   * Emergency
   */
  E: "E",

  /**
   * Inpatient
   */
  I: "I",

  /**
   * Outpatient
   */
  O: "O",

  /**
   * Preadmit
   */
  P: "P",

  /**
   * Recurring patient
   */
  R: "R",

  /**
   * Obstetrics
   */
  B: "B",

  /**
   * Commercial Account
   */
  C: "C",

  /**
   * Not Applicable
   */
  N: "N",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientClassCode =
  typeof Hl7VSPatientClassCode[keyof typeof Hl7VSPatientClassCode];
