/**
 * A debit relationship ties a financial transaction (target) to an account (source). A debit, once applied (posted), may have either a positive or negative effect on the account balance, depending on the type of account. An asset account debit will increase the account balance. A non-asset account debit will decrease the account balance.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasDebit
 */
export const ActRelationshipHasDebitCode = {
  /**
   * has debit
   */
  hasdebit: "DEBIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasDebitCode =
  typeof ActRelationshipHasDebitCode[keyof typeof ActRelationshipHasDebitCode];
