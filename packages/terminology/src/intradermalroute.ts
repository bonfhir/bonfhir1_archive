/**
 * Intradermal
 * http://terminology.hl7.org/ValueSet/v3-IntradermalRoute
 */
export const IntradermalRouteCode = {
  /**
   * Implantation, intradermal
   */
  IDIMPLNT: "IDIMPLNT",

  /**
   * Injection, intradermal
   */
  IDINJ: "IDINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntradermalRouteCode =
  typeof IntradermalRouteCode[keyof typeof IntradermalRouteCode];
