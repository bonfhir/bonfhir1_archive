/**
 * A interaction effect of clinical use of a medication or other substance.
 * http://hl7.org/fhir/ValueSet/interaction-effect
 */
export const InteractionEffectCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InteractionEffectCode =
  typeof InteractionEffectCode[keyof typeof InteractionEffectCode];
