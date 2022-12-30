/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipPalliates
 */
export const ActRelationshipPalliatesCode = {
  /**
   * palliates
   */
  PALLTREAT: "PALLTREAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipPalliatesCode =
  typeof ActRelationshipPalliatesCode[keyof typeof ActRelationshipPalliatesCode];
