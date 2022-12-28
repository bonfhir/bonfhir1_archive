/**
 * Intrapericardial
 * http://terminology.hl7.org/ValueSet/v3-IntrapericardialRoute
 */
export const IntrapericardialRouteCode = {
  /**
   * Injection, intrapericardial
   */
  IPCARDINJ: "IPCARDINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrapericardialRouteCode =
  typeof IntrapericardialRouteCode[keyof typeof IntrapericardialRouteCode];
