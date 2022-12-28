/**
 * This value set includes sample funds reservation type codes.
 * http://hl7.org/fhir/ValueSet/fundsreserve
 */
export const FundsReservationCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FundsReservationCodesCode =
  typeof FundsReservationCodesCode[keyof typeof FundsReservationCodesCode];
