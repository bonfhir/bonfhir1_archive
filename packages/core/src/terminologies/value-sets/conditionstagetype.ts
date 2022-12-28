/**
 * Example value set for the type of stages of cancer and other conditions
 * http://hl7.org/fhir/ValueSet/condition-stage-type
 */
export const ConditionStageTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionStageTypeCode =
  typeof ConditionStageTypeCode[keyof typeof ConditionStageTypeCode];
