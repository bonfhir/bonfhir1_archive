/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the validity of a dose relative to a particular recommended schedule. This value set is provided as a suggestive example.
 * http://terminology.hl7.org/ValueSet/immunization-evaluation-dose-status
 */
export const ImmunizationEvaluationDoseStatusCodesCode = {
  /**
   * Valid
   */
  Valid: "valid",

  /**
   * Not valid
   */
  Notvalid: "notvalid",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationEvaluationDoseStatusCodesCode =
  typeof ImmunizationEvaluationDoseStatusCodesCode[keyof typeof ImmunizationEvaluationDoseStatusCodesCode];
