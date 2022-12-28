/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipDiagnosis
 */
export const ActRelationshipDiagnosisCode = {
  /**
   * diagnoses
   */
  DIAG: "DIAG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipDiagnosisCode =
  typeof ActRelationshipDiagnosisCode[keyof typeof ActRelationshipDiagnosisCode];
