/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipContainsStartOf
 */
export const ActRelationshipContainsStartOfCode = {
  /**
   * contains start of
   */
  SBSEAS: "SBSEAS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipContainsStartOfCode =
  typeof ActRelationshipContainsStartOfCode[keyof typeof ActRelationshipContainsStartOfCode];
