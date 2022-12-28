/**
 * The processing mode that applies to this list.
 * http://hl7.org/fhir/ValueSet/list-mode
 */
export const ListModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ListModeCode = typeof ListModeCode[keyof typeof ListModeCode];
