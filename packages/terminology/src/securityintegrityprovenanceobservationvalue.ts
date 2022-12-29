/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityProvenanceObservationValue
 */
export const SecurityIntegrityProvenanceObservationValueCode = {
  /**
   * provenance asserted by
   */
  provenanceassertedby: "_SECINTPRVABOBV",

  /**
   * clinician asserted
   */
  clinicianasserted: "CLINAST",

  /**
   * device asserted
   */
  deviceasserted: "DEVAST",

  /**
   * healthcare professional asserted
   */
  healthcareprofessionalasserted: "HCPAST",

  /**
   * patient acquaintance asserted
   */
  patientacquaintanceasserted: "PACQAST",

  /**
   * patient asserted
   */
  patientasserted: "PATAST",

  /**
   * payer asserted
   */
  payerasserted: "PAYAST",

  /**
   * professional asserted
   */
  professionalasserted: "PROAST",

  /**
   * substitute decision maker asserted
   */
  substitutedecisionmakerasserted: "SDMAST",

  /**
   * provenance reported by
   */
  provenancereportedby: "_SECINTPRVRBOBV",

  /**
   * clinician reported
   */
  clinicianreported: "CLINRPT",

  /**
   * device reported
   */
  devicereported: "DEVRPT",

  /**
   * healthcare professional reported
   */
  healthcareprofessionalreported: "HCPRPT",

  /**
   * patient acquaintance reported
   */
  patientacquaintancereported: "PACQRPT",

  /**
   * patient reported
   */
  patientreported: "PATRPT",

  /**
   * payer reported
   */
  payerreported: "PAYRPT",

  /**
   * professional reported
   */
  professionalreported: "PRORPT",

  /**
   * substitute decision maker reported
   */
  substitutedecisionmakerreported: "SDMRPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityProvenanceObservationValueCode =
  typeof SecurityIntegrityProvenanceObservationValueCode[keyof typeof SecurityIntegrityProvenanceObservationValueCode];
