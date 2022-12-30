/**
 * Transtympanic
 * http://terminology.hl7.org/ValueSet/v3-TranstympanicRoute
 */
export const TranstympanicRouteCode = {
  /**
   * Instillation, transtympanic
   */
  TRTYMPINSTIL: "TRTYMPINSTIL",

  /**
   * Topical absorption, transtympanic
   */
  TTYMPTABSORP: "TTYMPTABSORP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TranstympanicRouteCode =
  typeof TranstympanicRouteCode[keyof typeof TranstympanicRouteCode];
