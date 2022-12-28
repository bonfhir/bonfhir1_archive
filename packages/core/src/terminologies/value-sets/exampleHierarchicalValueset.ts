/**
 * Demonstration of extensions that build a hierarchical contains
 * http://hl7.org/fhir/ValueSet/example-hierarchical
 */
export const ExampleHierarchicalValueSetCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleHierarchicalValueSetCode =
  typeof ExampleHierarchicalValueSetCode[keyof typeof ExampleHierarchicalValueSetCode];
