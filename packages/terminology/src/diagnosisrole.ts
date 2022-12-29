/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 * http://terminology.hl7.org/ValueSet/diagnosis-role
 */
export const DiagnosisRoleCode = {
  /**
   * Admission diagnosis
   */
  Admissiondiagnosis: "AD",

  /**
   * Discharge diagnosis
   */
  Dischargediagnosis: "DD",

  /**
   * Chief complaint
   */
  Chiefcomplaint: "CC",

  /**
   * Comorbidity diagnosis
   */
  Comorbiditydiagnosis: "CM",

  /**
   * pre-op diagnosis
   */
  preopdiagnosis: "pre-op",

  /**
   * post-op diagnosis
   */
  postopdiagnosis: "post-op",

  /**
   * Billing
   */
  Billing: "billing",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiagnosisRoleCode =
  typeof DiagnosisRoleCode[keyof typeof DiagnosisRoleCode];
