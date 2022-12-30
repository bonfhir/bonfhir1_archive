/**
 * Codes for the assessment of whether the entity caused the event.
 * http://terminology.hl7.org/ValueSet/adverse-event-causality-assess
 */
export const AdverseEventCausalityAssessmentCode = {
  /**
   * Certain
   */
  certain: "certain",

  /**
   * Probably/Likely
   */
  "probably-likely": "probably-likely",

  /**
   * Possible
   */
  possible: "possible",

  /**
   * Unlikely
   */
  unlikely: "unlikely",

  /**
   * Conditional/Classified
   */
  "conditional-classified": "conditional-classified",

  /**
   * Unassessable/Unclassifiable
   */
  "unassessable-unclassifiable": "unassessable-unclassifiable",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventCausalityAssessmentCode =
  typeof AdverseEventCausalityAssessmentCode[keyof typeof AdverseEventCausalityAssessmentCode];
