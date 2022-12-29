/**
 * Intramuscular
 * http://terminology.hl7.org/ValueSet/v3-IntramuscularRoute
 */
export const IntramuscularRouteCode = {
  /**
   * Injection, intramuscular
   */
  Injectionintramuscular: "IM",

  /**
   * Injection, intramuscular, deep
   */
  Injectionintramusculardeep: "IMD",

  /**
   * Injection, intramuscular, z track
   */
  Injectionintramuscularztrack: "IMZ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntramuscularRouteCode =
  typeof IntramuscularRouteCode[keyof typeof IntramuscularRouteCode];
