/**
 * Type of security metadata observation made about the integrity provenance of an IT resource (data, information object, service, or system capability), which indicates the entity that made assertions about the resource. The asserting entity may not be the original informant about the resource.
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityProvenanceAssertedByObservationType
 */
export const SecurityIntegrityProvenanceAssertedByObservationTypeCode = {
  /**
   * security integrity provenance asserted by observation
   */
  securityintegrityprovenanceassertedbyobservation: "SECINTPRVABOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityProvenanceAssertedByObservationTypeCode =
  typeof SecurityIntegrityProvenanceAssertedByObservationTypeCode[keyof typeof SecurityIntegrityProvenanceAssertedByObservationTypeCode];
