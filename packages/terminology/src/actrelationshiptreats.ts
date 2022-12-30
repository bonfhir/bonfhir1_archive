/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipTreats
 */
export const ActRelationshipTreatsCode = {
  /**
   * treats
   */
  TREAT: "TREAT",

  /**
   * adjunctive treatment
   */
  ADJUNCT: "ADJUNCT",

  /**
   * maintenance treatment
   */
  MTREAT: "MTREAT",

  /**
   * palliates
   */
  PALLTREAT: "PALLTREAT",

  /**
   * symptomatic relief
   */
  SYMP: "SYMP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipTreatsCode =
  typeof ActRelationshipTreatsCode[keyof typeof ActRelationshipTreatsCode];
