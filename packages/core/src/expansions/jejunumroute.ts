/**
 * Jejunum
 * http://terminology.hl7.org/ValueSet/v3-JejunumRoute
 */
export const JejunumRouteCode = {
  /**
   * Instillation, gastro-jejunostomy tube
   */
  GJT: "GJT",

  /**
   * Instillation, jejunostomy tube
   */
  JJTINSTL: "JJTINSTL",

  /**
   * Instillation, orojejunum tube
   */
  OJJ: "OJJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type JejunumRouteCode =
  typeof JejunumRouteCode[keyof typeof JejunumRouteCode];
