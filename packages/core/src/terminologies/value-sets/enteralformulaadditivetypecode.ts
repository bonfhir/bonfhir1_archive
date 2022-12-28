/**
 * EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/entformula-additive
 */
export const EnteralFormulaAdditiveTypeCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EnteralFormulaAdditiveTypeCodeCode =
  typeof EnteralFormulaAdditiveTypeCodeCode[keyof typeof EnteralFormulaAdditiveTypeCodeCode];
