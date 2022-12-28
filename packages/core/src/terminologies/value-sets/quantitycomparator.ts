/**
 * How the Quantity should be understood and represented.
 * http://hl7.org/fhir/ValueSet/quantity-comparator
 */
export const QuantityComparatorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QuantityComparatorCode =
  typeof QuantityComparatorCode[keyof typeof QuantityComparatorCode];
