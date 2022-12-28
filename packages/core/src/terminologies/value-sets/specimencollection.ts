/**
 * Actions that can be taken for the collection of specimen from a subject.
 * http://hl7.org/fhir/ValueSet/specimen-collection
 */
export const SpecimenCollectionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecimenCollectionCode =
  typeof SpecimenCollectionCode[keyof typeof SpecimenCollectionCode];
