/**
 * This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.
 * http://hl7.org/fhir/ValueSet/encounter-special-arrangements
 */
export const SpecialArrangementsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecialArrangementsCode =
  typeof SpecialArrangementsCode[keyof typeof SpecialArrangementsCode];
