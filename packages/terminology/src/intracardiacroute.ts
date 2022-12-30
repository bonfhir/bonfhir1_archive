/**
 * Intracardiac
 * http://terminology.hl7.org/ValueSet/v3-IntracardiacRoute
 */
export const IntracardiacRouteCode = {
  /**
   * Infusion, intracardiac
   */
  IC: "IC",

  /**
   * Injection, intracardiac
   */
  ICARDINJ: "ICARDINJ",

  /**
   * Injection, intracardiac, rapid push
   */
  ICARDINJRP: "ICARDINJRP",

  /**
   * Injection, intracardiac, slow push
   */
  ICARDINJSP: "ICARDINJSP",

  /**
   * Injection, intracardiac, push
   */
  ICARINJP: "ICARINJP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracardiacRouteCode =
  typeof IntracardiacRouteCode[keyof typeof IntracardiacRouteCode];
