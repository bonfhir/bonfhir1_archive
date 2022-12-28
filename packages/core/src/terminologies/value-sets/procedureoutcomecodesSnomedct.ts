/**
 * Procedure Outcome code: A selection of relevant SNOMED CT codes.
 * http://hl7.org/fhir/ValueSet/procedure-outcome
 */
export const ProcedureOutcomeCodesSNOMEDCTCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcedureOutcomeCodesSNOMEDCTCode =
  typeof ProcedureOutcomeCodesSNOMEDCTCode[keyof typeof ProcedureOutcomeCodesSNOMEDCTCode];
