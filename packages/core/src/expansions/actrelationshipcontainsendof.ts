/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipContainsEndOf
 */
export const ActRelationshipContainsEndOfCode = {
  /**
   * contains end of
   */
  SBEEAE: "SBEEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipContainsEndOfCode =
  typeof ActRelationshipContainsEndOfCode[keyof typeof ActRelationshipContainsEndOfCode];
