/**
 * This value set includes example Diagnosis Type codes.
 * http://terminology.hl7.org/ValueSet/ex-diagnosistype
 */
export const ExampleDiagnosisTypeCodesCode = {
  /**
   * Admitting Diagnosis
   */
  admitting: "admitting",

  /**
   * Clinical Diagnosis
   */
  clinical: "clinical",

  /**
   * Differential Diagnosis
   */
  differential: "differential",

  /**
   * Discharge Diagnosis
   */
  discharge: "discharge",

  /**
   * Laboratory Diagnosis
   */
  laboratory: "laboratory",

  /**
   * Nursing Diagnosis
   */
  nursing: "nursing",

  /**
   * Prenatal Diagnosis
   */
  prenatal: "prenatal",

  /**
   * Principal Diagnosis
   */
  principal: "principal",

  /**
   * Radiology Diagnosis
   */
  radiology: "radiology",

  /**
   * Remote Diagnosis
   */
  remote: "remote",

  /**
   * Retrospective Diagnosis
   */
  retrospective: "retrospective",

  /**
   * Self Diagnosis
   */
  self: "self",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleDiagnosisTypeCodesCode =
  typeof ExampleDiagnosisTypeCodesCode[keyof typeof ExampleDiagnosisTypeCodesCode];
