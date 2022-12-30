/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipActiveImmunizationAgainst
 */
export const ActRelationshipActiveImmunizationAgainstCode = {
  /**
   * active immunization against
   */
  ACTIMM: "ACTIMM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipActiveImmunizationAgainstCode =
  typeof ActRelationshipActiveImmunizationAgainstCode[keyof typeof ActRelationshipActiveImmunizationAgainstCode];
