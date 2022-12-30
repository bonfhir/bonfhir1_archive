/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipContainsTimeOf
 */
export const ActRelationshipContainsTimeOfCode = {
  /**
   * contains time of
   */
  SBSEAE: "SBSEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipContainsTimeOfCode =
  typeof ActRelationshipContainsTimeOfCode[keyof typeof ActRelationshipContainsTimeOfCode];
