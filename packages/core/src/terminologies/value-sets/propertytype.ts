/**
 * The type of a property value.
 * http://hl7.org/fhir/ValueSet/concept-property-type
 */
export const PropertyTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PropertyTypeCode =
  typeof PropertyTypeCode[keyof typeof PropertyTypeCode];
