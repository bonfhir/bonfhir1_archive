/**
 * Intraocular
 * http://terminology.hl7.org/ValueSet/v3-IntraocularRoute
 */
export const IntraocularRouteCode = {
  /**
   * Injection, intraocular
   */
  Injectionintraocular: "IOINJ",

  /**
   * Insertion, intraocular, surgical
   */
  Insertionintraocularsurgical: "IOSURGINS",

  /**
   * Instillation, intraocular
   */
  Instillationintraocular: "IOINSTL",

  /**
   * Irrigation, intraocular
   */
  Irrigationintraocular: "IOIRR",

  /**
   * Topical application, intraocular
   */
  Topicalapplicationintraocular: "IOTOP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraocularRouteCode =
  typeof IntraocularRouteCode[keyof typeof IntraocularRouteCode];
