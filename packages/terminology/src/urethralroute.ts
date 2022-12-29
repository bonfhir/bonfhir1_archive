/**
 * Urethral
 * http://terminology.hl7.org/ValueSet/v3-UrethralRoute
 */
export const UrethralRouteCode = {
  /**
   * Injection, urethral
   */
  Injectionurethral: "URETHINJ",

  /**
   * Insertion, urethral
   */
  Insertionurethral: "URETHINS",

  /**
   * instillation, urethral
   */
  instillationurethral: "URETHINSTL",

  /**
   * Suppository, urethral
   */
  Suppositoryurethral: "URETHSUP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UrethralRouteCode =
  typeof UrethralRouteCode[keyof typeof UrethralRouteCode];
