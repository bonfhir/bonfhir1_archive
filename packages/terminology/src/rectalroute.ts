/**
 * Rectal
 * http://terminology.hl7.org/ValueSet/v3-RectalRoute
 */
export const RectalRouteCode = {
  /**
   * Enema, rectal
   */
  ENEMA: "ENEMA",

  /**
   * Enema, rectal retention
   */
  RETENEMA: "RETENEMA",

  /**
   * Insertion, rectal
   */
  PR: "PR",

  /**
   * Instillation, rectal
   */
  RECINSTL: "RECINSTL",

  /**
   * Instillation, rectal tube
   */
  RECTINSTL: "RECTINSTL",

  /**
   * Irrigation, rectal
   */
  RECIRR: "RECIRR",

  /**
   * Topical application, rectal
   */
  RECTAL: "RECTAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RectalRouteCode =
  typeof RectalRouteCode[keyof typeof RectalRouteCode];
