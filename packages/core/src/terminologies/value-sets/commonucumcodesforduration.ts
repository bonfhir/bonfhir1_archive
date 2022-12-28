/**
 * Unified Code for Units of Measure (UCUM). This value set includes all UCUM codes
 * http://hl7.org/fhir/ValueSet/duration-units
 */
export const CommonUCUMCodesForDurationCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommonUCUMCodesForDurationCode =
  typeof CommonUCUMCodesForDurationCode[keyof typeof CommonUCUMCodesForDurationCode];
