/**
 * A financial account established to track the net result of financial acts.
 * http://terminology.hl7.org/ValueSet/v3-ActClassAccount
 */
export const ActClassAccountCode = {
  /**
   * account
   */
  account: "ACCT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassAccountCode =
  typeof ActClassAccountCode[keyof typeof ActClassAccountCode];
