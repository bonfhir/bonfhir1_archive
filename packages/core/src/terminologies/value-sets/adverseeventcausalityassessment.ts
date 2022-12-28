/**
 * Codes for the assessment of whether the entity caused the event.
 * http://hl7.org/fhir/ValueSet/adverse-event-causality-assess
 */
export const AdverseEventCausalityAssessmentCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventCausalityAssessmentCode =
  typeof AdverseEventCausalityAssessmentCode[keyof typeof AdverseEventCausalityAssessmentCode];
