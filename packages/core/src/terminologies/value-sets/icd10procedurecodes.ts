/**
 * This value set includes sample ICD-10 Procedure codes.
 * http://hl7.org/fhir/ValueSet/icd-10-procedures
 */
export const ICD10ProcedureCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ICD10ProcedureCodesCode =
  typeof ICD10ProcedureCodesCode[keyof typeof ICD10ProcedureCodesCode];
