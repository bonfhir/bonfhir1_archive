/**
 * This value set defines the ISO 3166 Part 1 Numeric codes
 * http://hl7.org/fhir/ValueSet/iso3166-1-N
 */
export const Iso31661NCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Iso31661NCode = typeof Iso31661NCode[keyof typeof Iso31661NCode];
