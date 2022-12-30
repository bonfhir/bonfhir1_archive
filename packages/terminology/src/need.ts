/**
 * The frequency with which the target must be validated
 * http://terminology.hl7.org/ValueSet/verificationresult-need
 */
export const NeedCode = {
  /**
   * None
   */
  none: "none",

  /**
   * Initial
   */
  initial: "initial",

  /**
   * Periodic
   */
  periodic: "periodic",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NeedCode = typeof NeedCode[keyof typeof NeedCode];
