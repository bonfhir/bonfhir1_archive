/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipIndependentOfTimeOf
 */
export const ActRelationshipIndependentOfTimeOfCode = {
  /**
   * independent of time of
   */
  INDEPENDENT: "INDEPENDENT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipIndependentOfTimeOfCode =
  typeof ActRelationshipIndependentOfTimeOfCode[keyof typeof ActRelationshipIndependentOfTimeOfCode];
