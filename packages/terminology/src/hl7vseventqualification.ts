/**
 * Value Set of codes that qualify an event related to a product experience.
 * http://terminology.hl7.org/ValueSet/v2-0237
 */
export const Hl7VSEventQualificationCode = {
  /**
   * Interaction
   */
  I: "I",

  /**
   * Overdose
   */
  O: "O",

  /**
   * Abuse
   */
  A: "A",

  /**
   * Misuse
   */
  M: "M",

  /**
   * Dependency
   */
  D: "D",

  /**
   * Lack of expect therapeutic effect
   */
  L: "L",

  /**
   * Drug withdrawal
   */
  W: "W",

  /**
   * Unexpected beneficial effect
   */
  B: "B",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventQualificationCode =
  typeof Hl7VSEventQualificationCode[keyof typeof Hl7VSEventQualificationCode];
