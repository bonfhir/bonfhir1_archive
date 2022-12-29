/**
 * Oromucosal
 * http://terminology.hl7.org/ValueSet/v3-OromucosalRoute
 */
export const OromucosalRouteCode = {
  /**
   * Gargle
   */
  Gargle: "GARGLE",

  /**
   * Topical application, oromucosal
   */
  Topicalapplicationoromucosal: "ORMUC",

  /**
   * Suck, oromucosal
   */
  Suckoromucosal: "SUCK",

  /**
   * Swish and spit out, oromucosal
   */
  Swishandspitoutoromucosal: "SWISHSPIT",

  /**
   * Swish and swallow, oromucosal
   */
  Swishandswalloworomucosal: "SWISHSWAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OromucosalRouteCode =
  typeof OromucosalRouteCode[keyof typeof OromucosalRouteCode];
