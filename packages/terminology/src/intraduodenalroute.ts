/**
 * Intraduodenal
 * http://terminology.hl7.org/ValueSet/v3-IntraduodenalRoute
 */
export const IntraduodenalRouteCode = {
  /**
   * Instillation, intraduodenal
   */
  Instillationintraduodenal: "IDUODINSTIL",

  /**
   * Mucosal absorption, intraduodenal
   */
  Mucosalabsorptionintraduodenal: "IDOUDMAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraduodenalRouteCode =
  typeof IntraduodenalRouteCode[keyof typeof IntraduodenalRouteCode];
