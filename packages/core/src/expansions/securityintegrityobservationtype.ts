/**
 * Type of security metadata observation made about the integrity of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityObservationType
 */
export const SecurityIntegrityObservationTypeCode = {
  /**
   * security integrity observation
   */
  SECINTOBS: "SECINTOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityObservationTypeCode =
  typeof SecurityIntegrityObservationTypeCode[keyof typeof SecurityIntegrityObservationTypeCode];
