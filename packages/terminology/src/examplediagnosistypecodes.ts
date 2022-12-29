/**
 * This value set includes example Diagnosis Type codes.
 * http://terminology.hl7.org/ValueSet/ex-diagnosistype
 */
export const ExampleDiagnosisTypeCodesCode = {
  /**
   * Admitting Diagnosis
   */
  AdmittingDiagnosis: "admitting",

  /**
   * Clinical Diagnosis
   */
  ClinicalDiagnosis: "clinical",

  /**
   * Differential Diagnosis
   */
  DifferentialDiagnosis: "differential",

  /**
   * Discharge Diagnosis
   */
  DischargeDiagnosis: "discharge",

  /**
   * Laboratory Diagnosis
   */
  LaboratoryDiagnosis: "laboratory",

  /**
   * Nursing Diagnosis
   */
  NursingDiagnosis: "nursing",

  /**
   * Prenatal Diagnosis
   */
  PrenatalDiagnosis: "prenatal",

  /**
   * Principal Diagnosis
   */
  PrincipalDiagnosis: "principal",

  /**
   * Radiology Diagnosis
   */
  RadiologyDiagnosis: "radiology",

  /**
   * Remote Diagnosis
   */
  RemoteDiagnosis: "remote",

  /**
   * Retrospective Diagnosis
   */
  RetrospectiveDiagnosis: "retrospective",

  /**
   * Self Diagnosis
   */
  SelfDiagnosis: "self",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleDiagnosisTypeCodesCode =
  typeof ExampleDiagnosisTypeCodesCode[keyof typeof ExampleDiagnosisTypeCodesCode];
