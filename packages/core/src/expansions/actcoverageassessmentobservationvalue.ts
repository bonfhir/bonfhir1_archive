/**
 * Codes specify the category of observation, evidence, or document used to assess for services, e.g., discharge planning, or to establish eligibility for coverage under a policy or program. The type of evidence is coded as observation values.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageAssessmentObservationValue
 */
export const ActCoverageAssessmentObservationValueCode = {
  /**
   * ActCoverageAssessmentObservationValue
   */
  _ActCoverageAssessmentObservationValue:
    "_ActCoverageAssessmentObservationValue",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageAssessmentObservationValueCode =
  typeof ActCoverageAssessmentObservationValueCode[keyof typeof ActCoverageAssessmentObservationValueCode];
