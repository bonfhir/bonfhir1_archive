/**
 * **Description:**A relationship in which the target act is carried out to determine whether an effect attributed to the source act can be recreated.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipRe-challenge
 */
export const ActRelationshipReChallengeCode = {
  /**
   * re-challenge
   */
  RCHAL: "RCHAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipReChallengeCode =
  typeof ActRelationshipReChallengeCode[keyof typeof ActRelationshipReChallengeCode];
