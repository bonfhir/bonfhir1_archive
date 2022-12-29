/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipRelievedBy
 */
export const ActRelationshipRelievedByCode = {
  /**
   * relieved by
   */
  relievedby: "RELVBY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipRelievedByCode =
  typeof ActRelationshipRelievedByCode[keyof typeof ActRelationshipRelievedByCode];
