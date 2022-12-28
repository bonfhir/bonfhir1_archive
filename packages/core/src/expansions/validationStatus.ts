/**
 * Status of the validation of the target against the primary source
 * http://terminology.hl7.org/ValueSet/verificationresult-validation-status
 */
export const Validation_statusCode = {
  /**
   * Successful
   */
  successful: "successful",

  /**
   * Failed
   */
  failed: "failed",

  /**
   * Unknown
   */
  unknown: "unknown",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Validation_statusCode =
  typeof Validation_statusCode[keyof typeof Validation_statusCode];
