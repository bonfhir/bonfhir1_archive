/**
 * Procedure Category code: A selection of relevant SNOMED CT codes.
 * http://hl7.org/fhir/ValueSet/procedure-category
 */
export const ProcedureCategoryCodesSNOMEDCTCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcedureCategoryCodesSNOMEDCTCode =
  typeof ProcedureCategoryCodesSNOMEDCTCode[keyof typeof ProcedureCategoryCodesSNOMEDCTCode];
