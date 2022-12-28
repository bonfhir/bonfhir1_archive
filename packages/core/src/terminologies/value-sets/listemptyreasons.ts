/**
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 * http://hl7.org/fhir/ValueSet/list-empty-reason
 */
export const ListEmptyReasonsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ListEmptyReasonsCode =
  typeof ListEmptyReasonsCode[keyof typeof ListEmptyReasonsCode];
