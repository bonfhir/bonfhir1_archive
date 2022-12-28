/**
 * The method by which the substance weight was measured.
 * http://hl7.org/fhir/ValueSet/substance-weight-method
 */
export const WeightMethodCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WeightMethodCode =
  typeof WeightMethodCode[keyof typeof WeightMethodCode];
