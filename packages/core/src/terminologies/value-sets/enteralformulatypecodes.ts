/**
 * EnteralFormulaType : Codes for type of enteral formula to be administered to patient.  This value set is composed of SNOMED CT (US Extension) Concepts from SCTID 470581016 (Enteral+supplement feeds hierarchy (product)) and is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/entformula-type
 */
export const EnteralFormulaTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EnteralFormulaTypeCodesCode =
  typeof EnteralFormulaTypeCodesCode[keyof typeof EnteralFormulaTypeCodesCode];
