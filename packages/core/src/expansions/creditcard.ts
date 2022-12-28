/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CreditCard
 */
export const CreditCardCode = {
  /**
   * American Express
   */
  AE: "AE",

  /**
   * Diner's Club
   */
  DN: "DN",

  /**
   * Discover Card
   */
  DV: "DV",

  /**
   * Master Card
   */
  MC: "MC",

  /**
   * Visa
   */
  V: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CreditCardCode = typeof CreditCardCode[keyof typeof CreditCardCode];
