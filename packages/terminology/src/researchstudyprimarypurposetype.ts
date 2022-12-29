/**
 * Codes for the main intent of the study.
 * http://terminology.hl7.org/ValueSet/research-study-prim-purp-type
 */
export const ResearchStudyPrimaryPurposeTypeCode = {
  /**
   * Treatment
   */
  Treatment: "treatment",

  /**
   * Prevention
   */
  Prevention: "prevention",

  /**
   * Diagnostic
   */
  Diagnostic: "diagnostic",

  /**
   * Supportive Care
   */
  SupportiveCare: "supportive-care",

  /**
   * Screening
   */
  Screening: "screening",

  /**
   * Health Services Research
   */
  HealthServicesResearch: "health-services-research",

  /**
   * Basic Science
   */
  BasicScience: "basic-science",

  /**
   * Device Feasibility
   */
  DeviceFeasibility: "device-feasibility",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchStudyPrimaryPurposeTypeCode =
  typeof ResearchStudyPrimaryPurposeTypeCode[keyof typeof ResearchStudyPrimaryPurposeTypeCode];
