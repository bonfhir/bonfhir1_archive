/**
 * Intra-arterial
 * http://terminology.hl7.org/ValueSet/v3-IntraarterialRoute
 */
export const IntraarterialRouteCode = {
  /**
   * Infusion, intraarterial catheter
   */
  Infusionintraarterialcatheter: "IA",

  /**
   * Injection, intraarterial
   */
  Injectionintraarterial: "IAINJ",

  /**
   * Injection, intraarterial, push
   */
  Injectionintraarterialpush: "IAINJP",

  /**
   * Injection, intraarterial, slow push
   */
  Injectionintraarterialslowpush: "IAINJSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraarterialRouteCode =
  typeof IntraarterialRouteCode[keyof typeof IntraarterialRouteCode];
