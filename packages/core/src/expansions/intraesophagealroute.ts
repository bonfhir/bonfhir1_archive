/**
 * Intraesophageal
 * http://terminology.hl7.org/ValueSet/v3-IntraesophagealRoute
 */
export const IntraesophagealRouteCode = {
  /**
   * Instillation, intraesophageal
   */
  IESOPHINSTIL: "IESOPHINSTIL",

  /**
   * Topical application, intraesophageal
   */
  IESOPHTA: "IESOPHTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraesophagealRouteCode =
  typeof IntraesophagealRouteCode[keyof typeof IntraesophagealRouteCode];
