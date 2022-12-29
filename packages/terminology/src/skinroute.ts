/**
 * Skin
 * http://terminology.hl7.org/ValueSet/v3-SkinRoute
 */
export const SkinRouteCode = {
  /**
   * Occlusive dressing technique
   */
  Occlusivedressingtechnique: "OCDRESTA",

  /**
   * Topical application, skin
   */
  Topicalapplicationskin: "SKIN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SkinRouteCode = typeof SkinRouteCode[keyof typeof SkinRouteCode];
