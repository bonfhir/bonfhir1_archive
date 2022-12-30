/**
 * Value Set of codes specifying non-clincal precautions that need to be taken with the patient.
 * http://terminology.hl7.org/ValueSet/v2-0433
 */
export const Hl7VSPrecautionCodeCode = {
  /**
   * Aggressive
   */
  A: "A",

  /**
   * Blind
   */
  B: "B",

  /**
   * Confused
   */
  C: "C",

  /**
   * Deaf
   */
  D: "D",

  /**
   * On IV
   */
  I: "I",

  /**
   * Do not resuscitate
   */
  N: "N",

  /**
   * Paraplegic
   */
  P: "P",

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
export type Hl7VSPrecautionCodeCode =
  typeof Hl7VSPrecautionCodeCode[keyof typeof Hl7VSPrecautionCodeCode];
