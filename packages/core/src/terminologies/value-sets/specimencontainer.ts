/**
 * Containers which may hold specimens or specimen containers. Include codes  SNOMED CT(http://snomed.info/sct) where concept is-a 434711009 (Specimen container (physical object))
 * http://hl7.org/fhir/ValueSet/specimen-container-type
 */
export const SpecimenContainerCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecimenContainerCode =
  typeof SpecimenContainerCode[keyof typeof SpecimenContainerCode];
