/**
 * The domestic partnership status of a person.

*Example:*Married, separated, divorced, widowed, common-law marriage.
 * http://terminology.hl7.org/ValueSet/v3-MaritalStatus
 */
export const MaritalStatusCode = {
  /**
   * Annulled
   */
  A: "A",

  /**
   * Divorced
   */
  D: "D",

  /**
   * Interlocutory
   */
  I: "I",

  /**
   * Legally Separated
   */
  L: "L",

  /**
   * Married
   */
  M: "M",

  /**
   * Polygamous
   */
  P: "P",

  /**
   * Domestic partner
   */
  T: "T",

  /**
   * unmarried
   */
  U: "U",

  /**
   * Widowed
   */
  W: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MaritalStatusCode =
  typeof MaritalStatusCode[keyof typeof MaritalStatusCode];
