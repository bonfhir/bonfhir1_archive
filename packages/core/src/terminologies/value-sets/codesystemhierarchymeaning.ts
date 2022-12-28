/**
 * The meaning of the hierarchy of concepts in a code system.
 * http://hl7.org/fhir/ValueSet/codesystem-hierarchy-meaning
 */
export const CodeSystemHierarchyMeaningCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CodeSystemHierarchyMeaningCode =
  typeof CodeSystemHierarchyMeaningCode[keyof typeof CodeSystemHierarchyMeaningCode];
