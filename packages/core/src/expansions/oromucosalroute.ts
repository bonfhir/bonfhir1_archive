/**
 * Oromucosal
 * http://terminology.hl7.org/ValueSet/v3-OromucosalRoute
 */
export const OromucosalRouteCode = {
  /**
   * Gargle
   */
  GARGLE: "GARGLE",

  /**
   * Topical application, oromucosal
   */
  ORMUC: "ORMUC",

  /**
   * Suck, oromucosal
   */
  SUCK: "SUCK",

  /**
   * Swish and spit out, oromucosal
   */
  SWISHSPIT: "SWISHSPIT",

  /**
   * Swish and swallow, oromucosal
   */
  SWISHSWAL: "SWISHSWAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OromucosalRouteCode =
  typeof OromucosalRouteCode[keyof typeof OromucosalRouteCode];
