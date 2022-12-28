/**
 * The handling of the variable in statistical analysis for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 * http://hl7.org/fhir/ValueSet/variable-handling
 */
export const EvidenceVariableHandlingCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EvidenceVariableHandlingCode =
  typeof EvidenceVariableHandlingCode[keyof typeof EvidenceVariableHandlingCode];
