/**
 * Iontophoresis
 * http://terminology.hl7.org/ValueSet/v3-IontophoresisRoute
 */
export const IontophoresisRouteCode = {
  /**
   * Topical application, iontophoresis
   */
  Topicalapplicationiontophoresis: "IONTO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IontophoresisRouteCode =
  typeof IontophoresisRouteCode[keyof typeof IontophoresisRouteCode];
