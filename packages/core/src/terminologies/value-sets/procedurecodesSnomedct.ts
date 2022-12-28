/**
 * Procedure Code: All SNOMED CT procedure codes.
 * http://hl7.org/fhir/ValueSet/procedure-code
 */
export const ProcedureCodesSNOMEDCTCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcedureCodesSNOMEDCTCode =
  typeof ProcedureCodesSNOMEDCTCode[keyof typeof ProcedureCodesSNOMEDCTCode];
