/**
 * Example value set for Cause of Condition codes
 * http://hl7.org/fhir/ValueSet/condition-cause
 */
export const ConditionCauseCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionCauseCodesCode =
  typeof ConditionCauseCodesCode[keyof typeof ConditionCauseCodesCode];
