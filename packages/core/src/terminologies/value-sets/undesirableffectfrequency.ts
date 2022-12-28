/**
 * A categorisation for a frequency of occurence of an undesirable effect.
 * http://hl7.org/fhir/ValueSet/undesirable-effect-frequency
 */
export const UndesirablEffectFrequencyCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UndesirablEffectFrequencyCode =
  typeof UndesirablEffectFrequencyCode[keyof typeof UndesirablEffectFrequencyCode];
