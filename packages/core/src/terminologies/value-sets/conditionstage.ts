/**
 * Example value set for stages of cancer and other conditions.
 * http://hl7.org/fhir/ValueSet/condition-stage
 */
export const ConditionStageCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionStageCode =
  typeof ConditionStageCode[keyof typeof ConditionStageCode];
