/**
 * Body surface
 * http://terminology.hl7.org/ValueSet/v3-BodySurfaceRoute
 */
export const BodySurfaceRouteCode = {
  /**
   * Topical application, soaked dressing
   */
  Topicalapplicationsoakeddressing: "DRESS",

  /**
   * Electro-osmosis
   */
  Electroosmosis: "ELECTOSMOS",

  /**
   * Topical application, iontophoresis
   */
  Topicalapplicationiontophoresis: "IONTO",

  /**
   * Immersion (soak)
   */
  Immersionsoak: "SOAK",

  /**
   * Topical application, swab
   */
  Topicalapplicationswab: "SWAB",

  /**
   * Topical
   */
  Topical: "TOPICAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BodySurfaceRouteCode =
  typeof BodySurfaceRouteCode[keyof typeof BodySurfaceRouteCode];
