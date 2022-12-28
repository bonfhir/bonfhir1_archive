/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 * http://hl7.org/fhir/ValueSet/evidence-quality
 */
export const QualityOfEvidenceRatingCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QualityOfEvidenceRatingCode =
  typeof QualityOfEvidenceRatingCode[keyof typeof QualityOfEvidenceRatingCode];
