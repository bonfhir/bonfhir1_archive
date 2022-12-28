/**
 * Base values for the order of the items in a list resource.
 * http://hl7.org/fhir/ValueSet/list-order
 */
export const ListOrderCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ListOrderCodesCode =
  typeof ListOrderCodesCode[keyof typeof ListOrderCodesCode];
