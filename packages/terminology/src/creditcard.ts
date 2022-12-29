/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CreditCard
 */
export const CreditCardCode = {
  /**
   * American Express
   */
  AmericanExpress: "AE",

  /**
   * Diner's Club
   */
  DinersClub: "DN",

  /**
   * Discover Card
   */
  DiscoverCard: "DV",

  /**
   * Master Card
   */
  MasterCard: "MC",

  /**
   * Visa
   */
  Visa: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CreditCardCode = typeof CreditCardCode[keyof typeof CreditCardCode];
