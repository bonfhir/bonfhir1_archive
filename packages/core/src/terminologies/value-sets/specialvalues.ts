/**
 * A set of generally useful codes defined so they can be included in value sets.
 * http://hl7.org/fhir/ValueSet/special-values
 */
export const SpecialValuesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecialValuesCode =
  typeof SpecialValuesCode[keyof typeof SpecialValuesCode];
