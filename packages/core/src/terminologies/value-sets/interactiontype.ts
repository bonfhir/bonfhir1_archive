/**
 * A categorisation for an interaction between two substances.
 * http://hl7.org/fhir/ValueSet/interaction-type
 */
export const InteractionTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InteractionTypeCode =
  typeof InteractionTypeCode[keyof typeof InteractionTypeCode];
