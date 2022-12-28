/**
 * A sub-class of Act representing any transaction between two accounts whose value is measured in monetary terms.

In the "intent" mood, communicates a request for a transaction to be initiated, or communicates a transfer of value between two accounts.

In the "event" mood, communicates the posting of a transaction to an account.
 * http://terminology.hl7.org/ValueSet/v3-ActClassFinancialTransaction
 */
export const ActClassFinancialTransactionCode = {
  /**
   * financial transaction
   */
  XACT: "XACT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassFinancialTransactionCode =
  typeof ActClassFinancialTransactionCode[keyof typeof ActClassFinancialTransactionCode];
