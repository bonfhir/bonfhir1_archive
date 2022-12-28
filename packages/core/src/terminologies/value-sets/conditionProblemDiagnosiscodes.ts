/**
 * Example value set for Condition/Problem/Diagnosis codes.
 * http://hl7.org/fhir/ValueSet/condition-code
 */
export const ConditionProblemDiagnosisCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionProblemDiagnosisCodesCode =
  typeof ConditionProblemDiagnosisCodesCode[keyof typeof ConditionProblemDiagnosisCodesCode];
