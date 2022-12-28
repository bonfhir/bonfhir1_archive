/**
 * A code specifying the state of the resource instance.
 * http://hl7.org/fhir/ValueSet/explanationofbenefit-status
 */
export const ExplanationOfBenefitStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExplanationOfBenefitStatusCode =
  typeof ExplanationOfBenefitStatusCode[keyof typeof ExplanationOfBenefitStatusCode];
