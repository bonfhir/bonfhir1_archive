/**
 * How a property is represented when serialized.
 * http://hl7.org/fhir/ValueSet/property-representation
 */
export const PropertyRepresentationCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PropertyRepresentationCode =
  typeof PropertyRepresentationCode[keyof typeof PropertyRepresentationCode];
