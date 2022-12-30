/**
 * This value set includes sample funds reservation type codes.
 * http://terminology.hl7.org/ValueSet/fundsreserve
 */
export const FundsReservationCodesCode = {
  /**
   * Patient
   */
  patient: "patient",

  /**
   * Provider
   */
  provider: "provider",

  /**
   * None
   */
  none: "none",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FundsReservationCodesCode =
  typeof FundsReservationCodesCode[keyof typeof FundsReservationCodesCode];
