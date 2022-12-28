/**
 * Indication of the degree of conformance expectations associated with a binding.
 * http://hl7.org/fhir/ValueSet/binding-strength
 */
export const BindingStrengthCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BindingStrengthCode =
  typeof BindingStrengthCode[keyof typeof BindingStrengthCode];
