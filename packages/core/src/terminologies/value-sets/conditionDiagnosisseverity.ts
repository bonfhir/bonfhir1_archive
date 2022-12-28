/**
 * Preferred value set for Condition/Diagnosis severity grading.
 * http://hl7.org/fhir/ValueSet/condition-severity
 */
export const ConditionDiagnosisSeverityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionDiagnosisSeverityCode =
  typeof ConditionDiagnosisSeverityCode[keyof typeof ConditionDiagnosisSeverityCode];
