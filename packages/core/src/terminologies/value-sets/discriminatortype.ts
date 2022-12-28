/**
 * How an element value is interpreted when discrimination is evaluated.
 * http://hl7.org/fhir/ValueSet/discriminator-type
 */
export const DiscriminatorTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiscriminatorTypeCode =
  typeof DiscriminatorTypeCode[keyof typeof DiscriminatorTypeCode];
