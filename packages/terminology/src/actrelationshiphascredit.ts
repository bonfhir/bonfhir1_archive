/**
 * A credit relationship ties a financial transaction (target) to an account (source). A credit, once applied (posted), may have either a positive or negative effect on the account balance, depending on the type of account. An asset account credit will decrease the account balance. A non-asset account credit will decrease the account balance.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasCredit
 */
export const ActRelationshipHasCreditCode = {
  /**
   * has credit
   */
  hascredit: "CREDIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasCreditCode =
  typeof ActRelationshipHasCreditCode[keyof typeof ActRelationshipHasCreditCode];
