/**
 * The type of substance weight measurement.
 * http://hl7.org/fhir/ValueSet/substance-weight-type
 */
export const WeightTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WeightTypeCode = typeof WeightTypeCode[keyof typeof WeightTypeCode];
