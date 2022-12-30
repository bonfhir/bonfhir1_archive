/**
 * Intraocular
 * http://terminology.hl7.org/ValueSet/v3-IntraocularRoute
 */
export const IntraocularRouteCode = {
  /**
   * Injection, intraocular
   */
  IOINJ: "IOINJ",

  /**
   * Insertion, intraocular, surgical
   */
  IOSURGINS: "IOSURGINS",

  /**
   * Instillation, intraocular
   */
  IOINSTL: "IOINSTL",

  /**
   * Irrigation, intraocular
   */
  IOIRR: "IOIRR",

  /**
   * Topical application, intraocular
   */
  IOTOP: "IOTOP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraocularRouteCode =
  typeof IntraocularRouteCode[keyof typeof IntraocularRouteCode];
