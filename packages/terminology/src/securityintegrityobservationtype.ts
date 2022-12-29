/**
 * Type of security metadata observation made about the integrity of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityObservationType
 */
export const SecurityIntegrityObservationTypeCode = {
  /**
   * security integrity observation
   */
  securityintegrityobservation: "SECINTOBS",

  /**
   * security alteration integrity observation
   */
  securityalterationintegrityobservation: "SECALTINTOBS",

  /**
   * security data integrity observation
   */
  securitydataintegrityobservation: "SECDATINTOBS",

  /**
   * security integrity confidence observation
   */
  securityintegrityconfidenceobservation: "SECINTCONOBS",

  /**
   * security integrity provenance observation
   */
  securityintegrityprovenanceobservation: "SECINTPRVOBS",

  /**
   * security integrity provenance asserted by observation
   */
  securityintegrityprovenanceassertedbyobservation: "SECINTPRVABOBS",

  /**
   * security integrity provenance reported by observation
   */
  securityintegrityprovenancereportedbyobservation: "SECINTPRVRBOBS",

  /**
   * security integrity status observation
   */
  securityintegritystatusobservation: "SECINTSTOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityObservationTypeCode =
  typeof SecurityIntegrityObservationTypeCode[keyof typeof SecurityIntegrityObservationTypeCode];
