/**
 * Defines which action to take if there is no match in the group.
 * http://hl7.org/fhir/ValueSet/conceptmap-unmapped-mode
 */
export const ConceptMapGroupUnmappedModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConceptMapGroupUnmappedModeCode =
  typeof ConceptMapGroupUnmappedModeCode[keyof typeof ConceptMapGroupUnmappedModeCode];
