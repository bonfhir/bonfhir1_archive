/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 * http://hl7.org/fhir/ValueSet/variable-type
 */
export const VariableTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VariableTypeCode =
  typeof VariableTypeCode[keyof typeof VariableTypeCode];
