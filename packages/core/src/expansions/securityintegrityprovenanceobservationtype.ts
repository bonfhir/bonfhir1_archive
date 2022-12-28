/**
 * Type of security metadata observation made about the provenance integrity of an IT resource (data, information object, service, or system capability), which indicates the lifecycle completeness or workflow status of an IT resource, such as its creation, modification, suspension, and deletion; locations in which the resource has been collected or archived, from which it may be retrieved, and the history of its distribution and disclosure. Integrity provenance metadata about an IT resource may be used to assess its veracity, reliability, and trustworthiness.
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityProvenanceObservationType
 */
export const SecurityIntegrityProvenanceObservationTypeCode = {
  /**
   * security integrity provenance observation
   */
  SECINTPRVOBS: "SECINTPRVOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityProvenanceObservationTypeCode =
  typeof SecurityIntegrityProvenanceObservationTypeCode[keyof typeof SecurityIntegrityProvenanceObservationTypeCode];
