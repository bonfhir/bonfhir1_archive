/**
 * Distinguishes the kinds of coded observations that could be the trigger for clinical issue detection. These are observations that are not measurable, but instead can be defined with codes. Coded observation types include: Allergy, Intolerance, Medical Condition, Pregnancy status, etc.
 * http://terminology.hl7.org/ValueSet/v3-ObservationIssueTriggerCodedObservationType
 */
export const ObservationIssueTriggerCodedObservationTypeCode = {
  /**
   * ObservationIssueTriggerCodedObservationType
   */
  _ObservationIssueTriggerCodedObservationType:
    "_ObservationIssueTriggerCodedObservationType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationIssueTriggerCodedObservationTypeCode =
  typeof ObservationIssueTriggerCodedObservationTypeCode[keyof typeof ObservationIssueTriggerCodedObservationTypeCode];
