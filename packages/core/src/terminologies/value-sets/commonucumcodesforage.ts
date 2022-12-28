/**
 * Unified Code for Units of Measure (UCUM). This value set includes all UCUM codes
 * http://hl7.org/fhir/ValueSet/age-units
 */
export const CommonUCUMCodesForAgeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommonUCUMCodesForAgeCode =
  typeof CommonUCUMCodesForAgeCode[keyof typeof CommonUCUMCodesForAgeCode];
