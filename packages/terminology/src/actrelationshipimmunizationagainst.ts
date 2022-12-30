/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipImmunizationAgainst
 */
export const ActRelationshipImmunizationAgainstCode = {
  /**
   * immunization against
   */
  IMM: "IMM",

  /**
   * active immunization against
   */
  ACTIMM: "ACTIMM",

  /**
   * passive immunization against
   */
  PASSIMM: "PASSIMM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipImmunizationAgainstCode =
  typeof ActRelationshipImmunizationAgainstCode[keyof typeof ActRelationshipImmunizationAgainstCode];
