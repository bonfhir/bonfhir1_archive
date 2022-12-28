/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipCompliesWith
 */
export const ActRelationshipCompliesWithCode = {
  /**
   * complies with
   */
  COMPLY: "COMPLY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipCompliesWithCode =
  typeof ActRelationshipCompliesWithCode[keyof typeof ActRelationshipCompliesWithCode];
