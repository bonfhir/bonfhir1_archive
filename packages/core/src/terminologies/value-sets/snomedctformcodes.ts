/**
 * This value set includes all dose form codes from SNOMED CT - provided as an exemplar.
 * http://hl7.org/fhir/ValueSet/medication-form-codes
 */
export const SNOMEDCTFormCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SNOMEDCTFormCodesCode =
  typeof SNOMEDCTFormCodesCode[keyof typeof SNOMEDCTFormCodesCode];
