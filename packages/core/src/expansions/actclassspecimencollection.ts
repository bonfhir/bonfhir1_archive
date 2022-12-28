/**
 * A procedure for obtaining a specimen from a source entity.
 * http://terminology.hl7.org/ValueSet/v3-ActClassSpecimenCollection
 */
export const ActClassSpecimenCollectionCode = {
  /**
   * Specimen Collection
   */
  SPECCOLLECT: "SPECCOLLECT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassSpecimenCollectionCode =
  typeof ActClassSpecimenCollectionCode[keyof typeof ActClassSpecimenCollectionCode];
