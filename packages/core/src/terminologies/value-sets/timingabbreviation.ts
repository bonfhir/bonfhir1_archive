/**
 * Code for a known / defined timing pattern.
 * http://hl7.org/fhir/ValueSet/timing-abbreviation
 */
export const TimingAbbreviationCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TimingAbbreviationCode =
  typeof TimingAbbreviationCode[keyof typeof TimingAbbreviationCode];
