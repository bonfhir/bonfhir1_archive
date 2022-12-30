/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 * http://terminology.hl7.org/ValueSet/diagnosis-role
 */
export const DiagnosisRoleCode = {
  /**
   * Admission diagnosis
   */
  AD: "AD",

  /**
   * Discharge diagnosis
   */
  DD: "DD",

  /**
   * Chief complaint
   */
  CC: "CC",

  /**
   * Comorbidity diagnosis
   */
  CM: "CM",

  /**
   * pre-op diagnosis
   */
  "pre-op": "pre-op",

  /**
   * post-op diagnosis
   */
  "post-op": "post-op",

  /**
   * Billing
   */
  billing: "billing",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiagnosisRoleCode =
  typeof DiagnosisRoleCode[keyof typeof DiagnosisRoleCode];
