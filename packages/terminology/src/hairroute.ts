/**
 * Hair
 * http://terminology.hl7.org/ValueSet/v3-HairRoute
 */
export const HairRouteCode = {
  /**
   * Topical application, hair
   */
  HAIR: "HAIR",

  /**
   * Shampoo
   */
  SHAMPOO: "SHAMPOO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HairRouteCode = typeof HairRouteCode[keyof typeof HairRouteCode];
