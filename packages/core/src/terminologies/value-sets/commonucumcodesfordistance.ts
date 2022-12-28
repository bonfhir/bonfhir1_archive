/**
 * Unified Code for Units of Measure (UCUM). This value set includes common UCUM codes for units of distance
 * http://hl7.org/fhir/ValueSet/distance-units
 */
export const CommonUCUMCodesForDistanceCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommonUCUMCodesForDistanceCode =
  typeof CommonUCUMCodesForDistanceCode[keyof typeof CommonUCUMCodesForDistanceCode];
