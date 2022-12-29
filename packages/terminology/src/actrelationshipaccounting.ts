/**
 * Codes that describe the relationship between an Act and a financial instrument such as a financial transaction, account or invoice element.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipAccounting
 */
export const ActRelationshipAccountingCode = {
  /**
   * ActRelationshipCostTracking
   */
  ActRelationshipCostTracking: "_ActRelationshipCostTracking",

  /**
   * has charge
   */
  hascharge: "CHRG",

  /**
   * has cost
   */
  hascost: "COST",

  /**
   * ActRelationshipPosting
   */
  ActRelationshipPosting: "_ActRelationshipPosting",

  /**
   * has credit
   */
  hascredit: "CREDIT",

  /**
   * has debit
   */
  hasdebit: "DEBIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipAccountingCode =
  typeof ActRelationshipAccountingCode[keyof typeof ActRelationshipAccountingCode];
