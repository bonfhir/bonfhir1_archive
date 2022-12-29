/**
 * Type of security metadata observation made about the data integrity of an IT resource (data, information object, service, or system capability), which indicates the security mechanism used to preserve resource accuracy and consistency. Data integrity is defined by ISO 22600-23.3.21 as: "The property that data has not been altered or destroyed in an unauthorized manner", and by ISO/IEC 2382-8: The property of data whose accuracy and consistency are preserved regardless of changes made."
 * http://terminology.hl7.org/ValueSet/v3-SecurityDataIntegrityObservationType
 */
export const SecurityDataIntegrityObservationTypeCode = {
  /**
   * security data integrity observation
   */
  securitydataintegrityobservation: "SECDATINTOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityDataIntegrityObservationTypeCode =
  typeof SecurityDataIntegrityObservationTypeCode[keyof typeof SecurityDataIntegrityObservationTypeCode];
