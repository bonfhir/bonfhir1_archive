/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipPassiveImmunizationAgainst
 */
export const ActRelationshipPassiveImmunizationAgainstCode = {
  /**
   * passive immunization against
   */
  passiveimmunizationagainst: "PASSIMM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipPassiveImmunizationAgainstCode =
  typeof ActRelationshipPassiveImmunizationAgainstCode[keyof typeof ActRelationshipPassiveImmunizationAgainstCode];
