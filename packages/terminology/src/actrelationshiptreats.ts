/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipTreats
 */
export const ActRelationshipTreatsCode = {
  /**
   * treats
   */
  treats: "TREAT",

  /**
   * adjunctive treatment
   */
  adjunctivetreatment: "ADJUNCT",

  /**
   * maintenance treatment
   */
  maintenancetreatment: "MTREAT",

  /**
   * palliates
   */
  palliates: "PALLTREAT",

  /**
   * symptomatic relief
   */
  symptomaticrelief: "SYMP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipTreatsCode =
  typeof ActRelationshipTreatsCode[keyof typeof ActRelationshipTreatsCode];
