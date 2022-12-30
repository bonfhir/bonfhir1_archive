/**
 * Value Set of codes that describe the overall state of a patient as a result of patient care.
 * http://terminology.hl7.org/ValueSet/v2-0241
 */
export const Hl7VSPatientOutcomeCode = {
  /**
   * Died
   */
  D: "D",

  /**
   * Recovering
   */
  R: "R",

  /**
   * Not recovering/unchanged
   */
  N: "N",

  /**
   * Worsening
   */
  W: "W",

  /**
   * Sequelae
   */
  S: "S",

  /**
   * Fully recovered
   */
  F: "F",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientOutcomeCode =
  typeof Hl7VSPatientOutcomeCode[keyof typeof Hl7VSPatientOutcomeCode];
