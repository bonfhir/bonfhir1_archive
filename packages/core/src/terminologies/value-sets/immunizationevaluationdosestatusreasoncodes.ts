/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/immunization-evaluation-dose-status-reason
 */
export const ImmunizationEvaluationDoseStatusReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationEvaluationDoseStatusReasonCodesCode =
  typeof ImmunizationEvaluationDoseStatusReasonCodesCode[keyof typeof ImmunizationEvaluationDoseStatusReasonCodesCode];
