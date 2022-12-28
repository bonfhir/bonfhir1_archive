/**
 * Codes for the main intent of the study.
 * http://terminology.hl7.org/ValueSet/research-study-prim-purp-type
 */
export const ResearchStudyPrimaryPurposeTypeCode = {
  /**
   * Treatment
   */
  treatment: "treatment",

  /**
   * Prevention
   */
  prevention: "prevention",

  /**
   * Diagnostic
   */
  diagnostic: "diagnostic",

  /**
   * Supportive Care
   */
  "supportive-care": "supportive-care",

  /**
   * Screening
   */
  screening: "screening",

  /**
   * Health Services Research
   */
  "health-services-research": "health-services-research",

  /**
   * Basic Science
   */
  "basic-science": "basic-science",

  /**
   * Device Feasibility
   */
  "device-feasibility": "device-feasibility",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchStudyPrimaryPurposeTypeCode =
  typeof ResearchStudyPrimaryPurposeTypeCode[keyof typeof ResearchStudyPrimaryPurposeTypeCode];
