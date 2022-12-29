/**
 * Codes for the assessment of whether the entity caused the event.
 * http://terminology.hl7.org/ValueSet/adverse-event-causality-assess
 */
export const AdverseEventCausalityAssessmentCode = {
  /**
   * Certain
   */
  Certain: "certain",

  /**
   * Probably/Likely
   */
  ProbablyLikely: "probably-likely",

  /**
   * Possible
   */
  Possible: "possible",

  /**
   * Unlikely
   */
  Unlikely: "unlikely",

  /**
   * Conditional/Classified
   */
  ConditionalClassified: "conditional-classified",

  /**
   * Unassessable/Unclassifiable
   */
  UnassessableUnclassifiable: "unassessable-unclassifiable",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventCausalityAssessmentCode =
  typeof AdverseEventCausalityAssessmentCode[keyof typeof AdverseEventCausalityAssessmentCode];
