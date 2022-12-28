/**
 * The current state of the list.
 * http://hl7.org/fhir/ValueSet/list-status
 */
export const ListStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ListStatusCode = typeof ListStatusCode[keyof typeof ListStatusCode];
