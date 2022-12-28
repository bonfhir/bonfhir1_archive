/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipAdjunctiveTreatment
 */
export const ActRelationshipAdjunctiveTreatmentCode = {
  /**
   * adjunctive treatment
   */
  ADJUNCT: "ADJUNCT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipAdjunctiveTreatmentCode =
  typeof ActRelationshipAdjunctiveTreatmentCode[keyof typeof ActRelationshipAdjunctiveTreatmentCode];
