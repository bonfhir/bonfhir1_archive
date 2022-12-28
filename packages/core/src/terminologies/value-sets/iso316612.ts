/**
 * This value set defines the ISO 3166 Part 1 2-letter codes
 * http://hl7.org/fhir/ValueSet/iso3166-1-2
 */
export const Iso316612Code = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Iso316612Code = typeof Iso316612Code[keyof typeof Iso316612Code];
