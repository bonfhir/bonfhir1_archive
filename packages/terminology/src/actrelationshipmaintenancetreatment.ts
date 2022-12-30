/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipMaintenanceTreatment
 */
export const ActRelationshipMaintenanceTreatmentCode = {
  /**
   * maintenance treatment
   */
  MTREAT: "MTREAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipMaintenanceTreatmentCode =
  typeof ActRelationshipMaintenanceTreatmentCode[keyof typeof ActRelationshipMaintenanceTreatmentCode];
