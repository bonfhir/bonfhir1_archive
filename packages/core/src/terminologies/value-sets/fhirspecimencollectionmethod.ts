/**
 *  This example value set defines a set of codes that can be used to indicate the method by which a specimen was collected.
 * http://hl7.org/fhir/ValueSet/specimen-collection-method
 */
export const FHIRSpecimenCollectionMethodCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRSpecimenCollectionMethodCode =
  typeof FHIRSpecimenCollectionMethodCode[keyof typeof FHIRSpecimenCollectionMethodCode];
