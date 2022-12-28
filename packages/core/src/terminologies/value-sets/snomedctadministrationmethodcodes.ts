/**
 * This value set includes some method codes from SNOMED CT - provided as an exemplar
 * http://hl7.org/fhir/ValueSet/administration-method-codes
 */
export const SNOMEDCTAdministrationMethodCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SNOMEDCTAdministrationMethodCodesCode =
  typeof SNOMEDCTAdministrationMethodCodesCode[keyof typeof SNOMEDCTAdministrationMethodCodesCode];
