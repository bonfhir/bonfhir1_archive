/**
 * The explanation for why a patient is moved from one location to another within the organization
 * http://terminology.hl7.org/ValueSet/v3-TransferActReason
 */
export const TransferActReasonCode = {
  /**
   * Error
   */
  Error: "ER",

  /**
   * Request
   */
  Request: "RQ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TransferActReasonCode =
  typeof TransferActReasonCode[keyof typeof TransferActReasonCode];
