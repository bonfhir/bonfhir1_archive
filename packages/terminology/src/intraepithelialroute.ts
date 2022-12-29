/**
 * Intraepithelial
 * http://terminology.hl7.org/ValueSet/v3-IntraepithelialRoute
 */
export const IntraepithelialRouteCode = {
  /**
   * Injection, intraepithelial
   */
  Injectionintraepithelial: "IEPITHINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraepithelialRouteCode =
  typeof IntraepithelialRouteCode[keyof typeof IntraepithelialRouteCode];
