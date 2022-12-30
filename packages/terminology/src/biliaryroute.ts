/**
 * Biliary tract
 * http://terminology.hl7.org/ValueSet/v3-BiliaryRoute
 */
export const BiliaryRouteCode = {
  /**
   * Injection, biliary tract
   */
  BILINJ: "BILINJ",

  /**
   * Injection, for cholangiography
   */
  CHOLINJ: "CHOLINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BiliaryRouteCode =
  typeof BiliaryRouteCode[keyof typeof BiliaryRouteCode];
