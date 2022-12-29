/**
 * Type of security metadata observation made about the integrity provenance of an IT resource (data, information object, service, or system capability), which indicates the entity that reported the existence of the resource. The reporting entity may not be the original author of the resource.
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityProvenanceReportedByObservationType
 */
export const SecurityIntegrityProvenanceReportedByObservationTypeCode = {
  /**
   * security integrity provenance reported by observation
   */
  securityintegrityprovenancereportedbyobservation: "SECINTPRVRBOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityProvenanceReportedByObservationTypeCode =
  typeof SecurityIntegrityProvenanceReportedByObservationTypeCode[keyof typeof SecurityIntegrityProvenanceReportedByObservationTypeCode];
