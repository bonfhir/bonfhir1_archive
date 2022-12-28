/**
 * This value set defines the ISO 3166 Part 1 3-letter codes
 * http://hl7.org/fhir/ValueSet/iso3166-1-3
 */
export const Iso316613Code = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Iso316613Code = typeof Iso316613Code[keyof typeof Iso316613Code];
