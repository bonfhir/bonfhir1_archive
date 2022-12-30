/**
 * Intra-arterial
 * http://terminology.hl7.org/ValueSet/v3-IntraarterialRoute
 */
export const IntraarterialRouteCode = {
  /**
   * Infusion, intraarterial catheter
   */
  IA: "IA",

  /**
   * Injection, intraarterial
   */
  IAINJ: "IAINJ",

  /**
   * Injection, intraarterial, push
   */
  IAINJP: "IAINJP",

  /**
   * Injection, intraarterial, slow push
   */
  IAINJSP: "IAINJSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraarterialRouteCode =
  typeof IntraarterialRouteCode[keyof typeof IntraarterialRouteCode];
