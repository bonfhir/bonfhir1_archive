/**
 * Code values used to indicate the result of an online verification of insurance data.
 * http://terminology.hl7.org/ValueSet/v2-0970
 */
export const Hl7VSOnlineVerificationResultCode = {
  /**
   * Update performed
   */
  "1": "1",

  /**
   * update not necessary
   */
  "2": "2",

  /**
   * Error
   */
  "3": "3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOnlineVerificationResultCode =
  typeof Hl7VSOnlineVerificationResultCode[keyof typeof Hl7VSOnlineVerificationResultCode];
