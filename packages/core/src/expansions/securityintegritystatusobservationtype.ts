/**
 * Type of security metadata observation made about the integrity status of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions. Indicates the completeness or workflow status of an IT resource, which may impact users that are authorized to access and use the resource.
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityStatusObservationType
 */
export const SecurityIntegrityStatusObservationTypeCode = {
  /**
   * security integrity status observation
   */
  SECINTSTOBS: "SECINTSTOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityStatusObservationTypeCode =
  typeof SecurityIntegrityStatusObservationTypeCode[keyof typeof SecurityIntegrityStatusObservationTypeCode];
