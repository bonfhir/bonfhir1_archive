/**
 * Value Set of codes specifying non-clincal precautions that need to be taken with the patient.
 * http://terminology.hl7.org/ValueSet/v2-0433
 */
export const Hl7VSPrecautionCodeCode = {
  /**
   * Aggressive
   */
  Aggressive: "A",

  /**
   * Blind
   */
  Blind: "B",

  /**
   * Confused
   */
  Confused: "C",

  /**
   * Deaf
   */
  Deaf: "D",

  /**
   * On IV
   */
  OnIV: "I",

  /**
   * Do not resuscitate
   */
  Donotresuscitate: "N",

  /**
   * Paraplegic
   */
  Paraplegic: "P",

  /**
   * Other
   */
  Other: "O",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPrecautionCodeCode =
  typeof Hl7VSPrecautionCodeCode[keyof typeof Hl7VSPrecautionCodeCode];
