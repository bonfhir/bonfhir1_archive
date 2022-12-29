/**
 * Value Set of codes that describe the overall state of a patient as a result of patient care.
 * http://terminology.hl7.org/ValueSet/v2-0241
 */
export const Hl7VSPatientOutcomeCode = {
  /**
   * Died
   */
  Died: "D",

  /**
   * Recovering
   */
  Recovering: "R",

  /**
   * Not recovering/unchanged
   */
  Notrecoveringunchanged: "N",

  /**
   * Worsening
   */
  Worsening: "W",

  /**
   * Sequelae
   */
  Sequelae: "S",

  /**
   * Fully recovered
   */
  Fullyrecovered: "F",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientOutcomeCode =
  typeof Hl7VSPatientOutcomeCode[keyof typeof Hl7VSPatientOutcomeCode];
