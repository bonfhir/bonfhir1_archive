/**
 * Type of security metadata observation made about the integrity of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityObservationType
 */
export const SecurityIntegrityObservationTypeCode = {
  /**
   * security integrity observation
   */
  SECINTOBS: "SECINTOBS",

  /**
   * security alteration integrity observation
   */
  SECALTINTOBS: "SECALTINTOBS",

  /**
   * security data integrity observation
   */
  SECDATINTOBS: "SECDATINTOBS",

  /**
   * security integrity confidence observation
   */
  SECINTCONOBS: "SECINTCONOBS",

  /**
   * security integrity provenance observation
   */
  SECINTPRVOBS: "SECINTPRVOBS",

  /**
   * security integrity provenance asserted by observation
   */
  SECINTPRVABOBS: "SECINTPRVABOBS",

  /**
   * security integrity provenance reported by observation
   */
  SECINTPRVRBOBS: "SECINTPRVRBOBS",

  /**
   * security integrity status observation
   */
  SECINTSTOBS: "SECINTSTOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityObservationTypeCode =
  typeof SecurityIntegrityObservationTypeCode[keyof typeof SecurityIntegrityObservationTypeCode];
