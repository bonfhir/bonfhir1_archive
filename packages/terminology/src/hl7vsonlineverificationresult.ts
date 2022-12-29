/**
 * Code values used to indicate the result of an online verification of insurance data.
 * http://terminology.hl7.org/ValueSet/v2-0970
 */
export const Hl7VSOnlineVerificationResultCode = {
  /**
   * Update performed
   */
  Updateperformed: "1",

  /**
   * update not necessary
   */
  updatenotnecessary: "2",

  /**
   * Error
   */
  Error: "3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOnlineVerificationResultCode =
  typeof Hl7VSOnlineVerificationResultCode[keyof typeof Hl7VSOnlineVerificationResultCode];
