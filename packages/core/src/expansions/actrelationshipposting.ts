/**
 * Expresses values for describing the relationship between a FinancialTransaction and an Account.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipPosting
 */
export const ActRelationshipPostingCode = {
  /**
   * has credit
   */
  CREDIT: "CREDIT",

  /**
   * has debit
   */
  DEBIT: "DEBIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipPostingCode =
  typeof ActRelationshipPostingCode[keyof typeof ActRelationshipPostingCode];
