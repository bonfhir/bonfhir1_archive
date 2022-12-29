/**
 * Rectal
 * http://terminology.hl7.org/ValueSet/v3-RectalRoute
 */
export const RectalRouteCode = {
  /**
   * Enema, rectal
   */
  Enemarectal: "ENEMA",

  /**
   * Enema, rectal retention
   */
  Enemarectalretention: "RETENEMA",

  /**
   * Insertion, rectal
   */
  Insertionrectal: "PR",

  /**
   * Instillation, rectal
   */
  Instillationrectal: "RECINSTL",

  /**
   * Instillation, rectal tube
   */
  Instillationrectaltube: "RECTINSTL",

  /**
   * Irrigation, rectal
   */
  Irrigationrectal: "RECIRR",

  /**
   * Topical application, rectal
   */
  Topicalapplicationrectal: "RECTAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RectalRouteCode =
  typeof RectalRouteCode[keyof typeof RectalRouteCode];
