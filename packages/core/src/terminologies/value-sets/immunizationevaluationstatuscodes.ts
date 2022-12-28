/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the evaluation for vaccine administration event.
 * http://hl7.org/fhir/ValueSet/immunization-evaluation-status
 */
export const ImmunizationEvaluationStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationEvaluationStatusCodesCode =
  typeof ImmunizationEvaluationStatusCodesCode[keyof typeof ImmunizationEvaluationStatusCodesCode];
