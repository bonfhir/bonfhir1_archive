/**
 * Commonly encountered UCUM units (for purposes of helping populate look ups).
 * http://hl7.org/fhir/ValueSet/ucum-common
 */
export const CommonUCUMunitsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommonUCUMunitsCode =
  typeof CommonUCUMunitsCode[keyof typeof CommonUCUMunitsCode];
