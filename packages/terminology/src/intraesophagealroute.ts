/**
 * Intraesophageal
 * http://terminology.hl7.org/ValueSet/v3-IntraesophagealRoute
 */
export const IntraesophagealRouteCode = {
  /**
   * Instillation, intraesophageal
   */
  Instillationintraesophageal: "IESOPHINSTIL",

  /**
   * Topical application, intraesophageal
   */
  Topicalapplicationintraesophageal: "IESOPHTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraesophagealRouteCode =
  typeof IntraesophagealRouteCode[keyof typeof IntraesophagealRouteCode];
