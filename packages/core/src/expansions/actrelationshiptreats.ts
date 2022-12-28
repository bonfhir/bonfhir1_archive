/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipTreats
 */
export const ActRelationshipTreatsCode = {
  /**
   * treats
   */
  TREAT: "TREAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipTreatsCode =
  typeof ActRelationshipTreatsCode[keyof typeof ActRelationshipTreatsCode];
