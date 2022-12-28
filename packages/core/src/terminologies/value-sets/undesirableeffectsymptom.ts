/**
 * An undesirable effect of clinical use.
 * http://hl7.org/fhir/ValueSet/undesirable-effect-symptom
 */
export const UndesirableEffectSymptomCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UndesirableEffectSymptomCode =
  typeof UndesirableEffectSymptomCode[keyof typeof UndesirableEffectSymptomCode];
