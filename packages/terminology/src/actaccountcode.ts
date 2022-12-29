/**
 * An account represents a grouping of financial transactions that are tracked and reported together with a single balance. Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
 * http://terminology.hl7.org/ValueSet/v3-ActAccountCode
 */
export const ActAccountCodeCode = {
  /**
   * account receivable
   */
  accountreceivable: "ACCTRECEIVABLE",

  /**
   * Cash
   */
  Cash: "CASH",

  /**
   * credit card
   */
  creditcard: "CC",

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

  /**
   * patient billing account
   */
  patientbillingaccount: "PBILLACCT",

  /**
   * CreditCard
   */
  CreditCard: "_CreditCard",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAccountCodeCode =
  typeof ActAccountCodeCode[keyof typeof ActAccountCodeCode];
