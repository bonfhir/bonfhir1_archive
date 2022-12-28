/**
 * Topical absorption
 * http://terminology.hl7.org/ValueSet/v3-TopicalAbsorptionRoute
 */
export const TopicalAbsorptionRouteCode = {
  /**
   * Topical absorption, transtympanic
   */
  TTYMPTABSORP: "TTYMPTABSORP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TopicalAbsorptionRouteCode =
  typeof TopicalAbsorptionRouteCode[keyof typeof TopicalAbsorptionRouteCode];
