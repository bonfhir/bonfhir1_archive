/**
 * Urethral
 * http://terminology.hl7.org/ValueSet/v3-UrethralRoute
 */
export const UrethralRouteCode = {
  /**
   * Injection, urethral
   */
  URETHINJ: "URETHINJ",

  /**
   * Insertion, urethral
   */
  URETHINS: "URETHINS",

  /**
   * instillation, urethral
   */
  URETHINSTL: "URETHINSTL",

  /**
   * Suppository, urethral
   */
  URETHSUP: "URETHSUP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UrethralRouteCode =
  typeof UrethralRouteCode[keyof typeof UrethralRouteCode];
