/**
 * Example value set for condition outcomes.
 * http://hl7.org/fhir/ValueSet/condition-outcome
 */
export const ConditionOutcomeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionOutcomeCodesCode =
  typeof ConditionOutcomeCodesCode[keyof typeof ConditionOutcomeCodesCode];
