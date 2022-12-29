/**
 * Intracardiac
 * http://terminology.hl7.org/ValueSet/v3-IntracardiacRoute
 */
export const IntracardiacRouteCode = {
  /**
   * Infusion, intracardiac
   */
  Infusionintracardiac: "IC",

  /**
   * Injection, intracardiac
   */
  Injectionintracardiac: "ICARDINJ",

  /**
   * Injection, intracardiac, rapid push
   */
  Injectionintracardiacrapidpush: "ICARDINJRP",

  /**
   * Injection, intracardiac, slow push
   */
  Injectionintracardiacslowpush: "ICARDINJSP",

  /**
   * Injection, intracardiac, push
   */
  Injectionintracardiacpush: "ICARINJP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracardiacRouteCode =
  typeof IntracardiacRouteCode[keyof typeof IntracardiacRouteCode];
