/**
 * Preferred value set for Condition Clinical Status.
 * http://hl7.org/fhir/ValueSet/condition-clinical
 */
export const ConditionClinicalStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionClinicalStatusCodesCode =
  typeof ConditionClinicalStatusCodesCode[keyof typeof ConditionClinicalStatusCodesCode];
