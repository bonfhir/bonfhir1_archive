/**
 * Intramuscular
 * http://terminology.hl7.org/ValueSet/v3-IntramuscularRoute
 */
export const IntramuscularRouteCode = {
  /**
   * Injection, intramuscular
   */
  IM: "IM",

  /**
   * Injection, intramuscular, deep
   */
  IMD: "IMD",

  /**
   * Injection, intramuscular, z track
   */
  IMZ: "IMZ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntramuscularRouteCode =
  typeof IntramuscularRouteCode[keyof typeof IntramuscularRouteCode];
