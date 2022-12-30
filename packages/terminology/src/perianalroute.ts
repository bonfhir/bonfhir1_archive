/**
 * Perianal
 * http://terminology.hl7.org/ValueSet/v3-PerianalRoute
 */
export const PerianalRouteCode = {
  /**
   * Topical application, perianal
   */
  PERIANAL: "PERIANAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PerianalRouteCode =
  typeof PerianalRouteCode[keyof typeof PerianalRouteCode];
