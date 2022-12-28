/**
 * The kind of operation to perform as a part of a property based filter.
 * http://hl7.org/fhir/ValueSet/filter-operator
 */
export const FilterOperatorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FilterOperatorCode =
  typeof FilterOperatorCode[keyof typeof FilterOperatorCode];
