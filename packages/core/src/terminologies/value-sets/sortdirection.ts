/**
 * The possible sort directions, ascending or descending.
 * http://hl7.org/fhir/ValueSet/sort-direction
 */
export const SortDirectionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SortDirectionCode =
  typeof SortDirectionCode[keyof typeof SortDirectionCode];
