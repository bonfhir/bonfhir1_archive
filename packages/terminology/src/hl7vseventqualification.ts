/**
 * Value Set of codes that qualify an event related to a product experience.
 * http://terminology.hl7.org/ValueSet/v2-0237
 */
export const Hl7VSEventQualificationCode = {
  /**
   * Interaction
   */
  Interaction: "I",

  /**
   * Overdose
   */
  Overdose: "O",

  /**
   * Abuse
   */
  Abuse: "A",

  /**
   * Misuse
   */
  Misuse: "M",

  /**
   * Dependency
   */
  Dependency: "D",

  /**
   * Lack of expect therapeutic effect
   */
  Lackofexpecttherapeuticeffect: "L",

  /**
   * Drug withdrawal
   */
  Drugwithdrawal: "W",

  /**
   * Unexpected beneficial effect
   */
  Unexpectedbeneficialeffect: "B",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventQualificationCode =
  typeof Hl7VSEventQualificationCode[keyof typeof Hl7VSEventQualificationCode];
