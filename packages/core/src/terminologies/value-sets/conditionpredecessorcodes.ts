/**
 * Example value set for condition predecessor codes.
 * http://hl7.org/fhir/ValueSet/condition-predecessor
 */
export const ConditionPredecessorCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionPredecessorCodesCode =
  typeof ConditionPredecessorCodesCode[keyof typeof ConditionPredecessorCodesCode];
