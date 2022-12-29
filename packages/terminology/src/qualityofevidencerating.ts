/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 * http://terminology.hl7.org/ValueSet/evidence-quality
 */
export const QualityOfEvidenceRatingCode = {
  /**
   * High quality
   */
  Highquality: "high",

  /**
   * Moderate quality
   */
  Moderatequality: "moderate",

  /**
   * Low quality
   */
  Lowquality: "low",

  /**
   * Very low quality
   */
  Verylowquality: "very-low",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QualityOfEvidenceRatingCode =
  typeof QualityOfEvidenceRatingCode[keyof typeof QualityOfEvidenceRatingCode];
