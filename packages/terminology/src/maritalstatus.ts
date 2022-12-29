/**
 * The domestic partnership status of a person.

*Example:*Married, separated, divorced, widowed, common-law marriage.
 * http://terminology.hl7.org/ValueSet/v3-MaritalStatus
 */
export const MaritalStatusCode = {
  /**
   * Annulled
   */
  Annulled: "A",

  /**
   * Divorced
   */
  Divorced: "D",

  /**
   * Interlocutory
   */
  Interlocutory: "I",

  /**
   * Legally Separated
   */
  LegallySeparated: "L",

  /**
   * Married
   */
  Married: "M",

  /**
   * Common Law
   */
  CommonLaw: "C",

  /**
   * Polygamous
   */
  Polygamous: "P",

  /**
   * Domestic partner
   */
  Domesticpartner: "T",

  /**
   * unmarried
   */
  unmarried: "U",

  /**
   * Never Married
   */
  NeverMarried: "S",

  /**
   * Widowed
   */
  Widowed: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MaritalStatusCode =
  typeof MaritalStatusCode[keyof typeof MaritalStatusCode];
