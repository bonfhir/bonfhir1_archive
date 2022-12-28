/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityProvenanceObservationValue
 */
export const SecurityIntegrityProvenanceObservationValueCode = {
  /**
   * provenance asserted by
   */
  _SECINTPRVABOBV: "_SECINTPRVABOBV",

  /**
   * clinician asserted
   */
  CLINAST: "CLINAST",

  /**
   * device asserted
   */
  DEVAST: "DEVAST",

  /**
   * healthcare professional asserted
   */
  HCPAST: "HCPAST",

  /**
   * patient acquaintance asserted
   */
  PACQAST: "PACQAST",

  /**
   * patient asserted
   */
  PATAST: "PATAST",

  /**
   * payer asserted
   */
  PAYAST: "PAYAST",

  /**
   * professional asserted
   */
  PROAST: "PROAST",

  /**
   * substitute decision maker asserted
   */
  SDMAST: "SDMAST",

  /**
   * provenance reported by
   */
  _SECINTPRVRBOBV: "_SECINTPRVRBOBV",

  /**
   * clinician reported
   */
  CLINRPT: "CLINRPT",

  /**
   * device reported
   */
  DEVRPT: "DEVRPT",

  /**
   * healthcare professional reported
   */
  HCPRPT: "HCPRPT",

  /**
   * patient acquaintance reported
   */
  PACQRPT: "PACQRPT",

  /**
   * patient reported
   */
  PATRPT: "PATRPT",

  /**
   * payer reported
   */
  PAYRPT: "PAYRPT",

  /**
   * professional reported
   */
  PRORPT: "PRORPT",

  /**
   * substitute decision maker reported
   */
  SDMRPT: "SDMRPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityProvenanceObservationValueCode =
  typeof SecurityIntegrityProvenanceObservationValueCode[keyof typeof SecurityIntegrityProvenanceObservationValueCode];
