/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 * http://terminology.hl7.org/ValueSet/evidence-quality
 */
export const QualityOfEvidenceRatingCode = {
  /**
   * High quality
   */
  high: "high",

  /**
   * Moderate quality
   */
  moderate: "moderate",

  /**
   * Low quality
   */
  low: "low",

  /**
   * Very low quality
   */
  "very-low": "very-low",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QualityOfEvidenceRatingCode =
  typeof QualityOfEvidenceRatingCode[keyof typeof QualityOfEvidenceRatingCode];
