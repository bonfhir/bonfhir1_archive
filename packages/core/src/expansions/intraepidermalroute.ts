/**
 * Intraepidermal
 * http://terminology.hl7.org/ValueSet/v3-IntraepidermalRoute
 */
export const IntraepidermalRouteCode = {
  /**
   * Injection, intraepidermal
   */
  IEPIDINJ: "IEPIDINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraepidermalRouteCode =
  typeof IntraepidermalRouteCode[keyof typeof IntraepidermalRouteCode];
