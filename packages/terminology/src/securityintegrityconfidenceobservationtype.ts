/**
 * Type of security metadata observation made about the integrity confidence of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityConfidenceObservationType
 */
export const SecurityIntegrityConfidenceObservationTypeCode = {
  /**
   * security integrity confidence observation
   */
  securityintegrityconfidenceobservation: "SECINTCONOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityConfidenceObservationTypeCode =
  typeof SecurityIntegrityConfidenceObservationTypeCode[keyof typeof SecurityIntegrityConfidenceObservationTypeCode];
