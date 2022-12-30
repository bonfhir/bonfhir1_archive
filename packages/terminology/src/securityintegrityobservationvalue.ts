/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityObservationValue
 */
export const SecurityIntegrityObservationValueCode = {
  /**
   * alteration integrity
   */
  _SECALTINTOBV: "_SECALTINTOBV",

  /**
   * abstracted
   */
  ABSTRED: "ABSTRED",

  /**
   * aggregated
   */
  AGGRED: "AGGRED",

  /**
   * anonymized
   */
  ANONYED: "ANONYED",

  /**
   * mapped
   */
  MAPPED: "MAPPED",

  /**
   * masked
   */
  MASKED: "MASKED",

  /**
   * pseudonymized
   */
  PSEUDED: "PSEUDED",

  /**
   * redacted
   */
  REDACTED: "REDACTED",

  /**
   * subsetted
   */
  SUBSETTED: "SUBSETTED",

  /**
   * syntactic transform
   */
  SYNTAC: "SYNTAC",

  /**
   * translated
   */
  TRSLT: "TRSLT",

  /**
   * versioned
   */
  VERSIONED: "VERSIONED",

  /**
   * data integrity
   */
  _SECDATINTOBV: "_SECDATINTOBV",

  /**
   * cryptographic hash function
   */
  CRYTOHASH: "CRYTOHASH",

  /**
   * digital signature
   */
  DIGSIG: "DIGSIG",

  /**
   * integrity confidence
   */
  _SECINTCONOBV: "_SECINTCONOBV",

  /**
   * highly reliable
   */
  HRELIABLE: "HRELIABLE",

  /**
   * reliable
   */
  RELIABLE: "RELIABLE",

  /**
   * uncertain reliability
   */
  UNCERTREL: "UNCERTREL",

  /**
   * unreliable
   */
  UNRELIABLE: "UNRELIABLE",

  /**
   * provenance
   */
  _SECINTPRVOBV: "_SECINTPRVOBV",

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

  /**
   * integrity status
   */
  _SECINTSTOBV: "_SECINTSTOBV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityObservationValueCode =
  typeof SecurityIntegrityObservationValueCode[keyof typeof SecurityIntegrityObservationValueCode];
