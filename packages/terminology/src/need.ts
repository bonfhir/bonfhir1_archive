/**
 * The frequency with which the target must be validated
 * http://terminology.hl7.org/ValueSet/verificationresult-need
 */
export const NeedCode = {
  /**
   * None
   */
  None: "none",

  /**
   * Initial
   */
  Initial: "initial",

  /**
   * Periodic
   */
  Periodic: "periodic",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NeedCode = typeof NeedCode[keyof typeof NeedCode];
