/**
 * An accommodation is a service provided for a Person or other LivingSubject in which a place is provided for the subject to reside for a period of time. Commonly used to track the provision of ward, private and semi-private accommodations for a patient.
 * http://terminology.hl7.org/ValueSet/v3-ActClassAccommodation
 */
export const ActClassAccommodationCode = {
  /**
   * accommodation
   */
  accommodation: "ACCM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassAccommodationCode =
  typeof ActClassAccommodationCode[keyof typeof ActClassAccommodationCode];
