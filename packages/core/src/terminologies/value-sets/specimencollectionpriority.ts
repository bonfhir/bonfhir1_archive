/**
 *  This example value set defines a set of codes that can be used to indicate the priority of collection of a specimen.
 * http://hl7.org/fhir/ValueSet/specimen-collection-priority
 */
export const SpecimenCollectionPriorityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecimenCollectionPriorityCode =
  typeof SpecimenCollectionPriorityCode[keyof typeof SpecimenCollectionPriorityCode];
