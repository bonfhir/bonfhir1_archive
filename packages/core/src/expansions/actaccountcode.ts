/**
 * An account represents a grouping of financial transactions that are tracked and reported together with a single balance. Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
 * http://terminology.hl7.org/ValueSet/v3-ActAccountCode
 */
export const ActAccountCodeCode = {
  /**
   * account receivable
   */
  ACCTRECEIVABLE: "ACCTRECEIVABLE",

  /**
   * Cash
   */
  CASH: "CASH",

  /**
   * credit card
   */
  CC: "CC",

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

  /**
   * patient billing account
   */
  PBILLACCT: "PBILLACCT",

  /**
   * CreditCard
   */
  _CreditCard: "_CreditCard",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAccountCodeCode =
  typeof ActAccountCodeCode[keyof typeof ActAccountCodeCode];
