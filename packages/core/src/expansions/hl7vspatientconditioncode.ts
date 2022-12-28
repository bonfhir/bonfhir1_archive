/**
 * Value Set of codes specifying the patient's current medical condition for the purpose of communicating to non-medical outside parties, e.g. family, employer, religious minister, media, etc.
 * http://terminology.hl7.org/ValueSet/v2-0434
 */
export const Hl7VSPatientConditionCodeCode = {
  /**
   * Satisfactory
   */
  A: "A",

  /**
   * Critical
   */
  C: "C",

  /**
   * Poor
   */
  P: "P",

  /**
   * Stable
   */
  S: "S",

  /**
   * Other
   */
  O: "O",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientConditionCodeCode =
  typeof Hl7VSPatientConditionCodeCode[keyof typeof Hl7VSPatientConditionCodeCode];
