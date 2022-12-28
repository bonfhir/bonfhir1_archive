/**
 * A categorisation for an undesirable effect.
 * http://hl7.org/fhir/ValueSet/undesirable-effect-classification
 */
export const UndesirableEffectClassificationCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UndesirableEffectClassificationCode =
  typeof UndesirableEffectClassificationCode[keyof typeof UndesirableEffectClassificationCode];
