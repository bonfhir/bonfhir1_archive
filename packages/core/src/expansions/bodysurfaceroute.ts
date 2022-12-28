/**
 * Body surface
 * http://terminology.hl7.org/ValueSet/v3-BodySurfaceRoute
 */
export const BodySurfaceRouteCode = {
  /**
   * Topical application, soaked dressing
   */
  DRESS: "DRESS",

  /**
   * Electro-osmosis
   */
  ELECTOSMOS: "ELECTOSMOS",

  /**
   * Topical application, iontophoresis
   */
  IONTO: "IONTO",

  /**
   * Immersion (soak)
   */
  SOAK: "SOAK",

  /**
   * Topical application, swab
   */
  SWAB: "SWAB",

  /**
   * Topical
   */
  TOPICAL: "TOPICAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BodySurfaceRouteCode =
  typeof BodySurfaceRouteCode[keyof typeof BodySurfaceRouteCode];
