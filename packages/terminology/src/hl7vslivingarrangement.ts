/**
 * Concepts characterizing the situation that patient-associated parties live in at their residential address.
 * http://terminology.hl7.org/ValueSet/v2-0220
 */
export const Hl7VSLivingArrangementCode = {
  /**
   * Alone
   */
  A: "A",

  /**
   * Family
   */
  F: "F",

  /**
   * Institution
   */
  I: "I",

  /**
   * Relative
   */
  R: "R",

  /**
   * Unknown
   */
  U: "U",

  /**
   * Spouse Only
   */
  S: "S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLivingArrangementCode =
  typeof Hl7VSLivingArrangementCode[keyof typeof Hl7VSLivingArrangementCode];
