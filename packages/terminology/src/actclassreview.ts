/**
 * The act of examining and evaluating the subject, usually another act. For example, "This prescription needs to be reviewed in 2 months."
 * http://terminology.hl7.org/ValueSet/v3-ActClassReview
 */
export const ActClassReviewCode = {
  /**
   * review
   */
  REV: "REV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassReviewCode =
  typeof ActClassReviewCode[keyof typeof ActClassReviewCode];
