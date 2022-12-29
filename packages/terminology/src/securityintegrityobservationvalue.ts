/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityObservationValue
 */
export const SecurityIntegrityObservationValueCode = {
  /**
   * alteration integrity
   */
  alterationintegrity: "_SECALTINTOBV",

  /**
   * abstracted
   */
  abstracted: "ABSTRED",

  /**
   * aggregated
   */
  aggregated: "AGGRED",

  /**
   * anonymized
   */
  anonymized: "ANONYED",

  /**
   * mapped
   */
  mapped: "MAPPED",

  /**
   * masked
   */
  masked: "MASKED",

  /**
   * pseudonymized
   */
  pseudonymized: "PSEUDED",

  /**
   * redacted
   */
  redacted: "REDACTED",

  /**
   * subsetted
   */
  subsetted: "SUBSETTED",

  /**
   * syntactic transform
   */
  syntactictransform: "SYNTAC",

  /**
   * translated
   */
  translated: "TRSLT",

  /**
   * versioned
   */
  versioned: "VERSIONED",

  /**
   * data integrity
   */
  dataintegrity: "_SECDATINTOBV",

  /**
   * cryptographic hash function
   */
  cryptographichashfunction: "CRYTOHASH",

  /**
   * digital signature
   */
  digitalsignature: "DIGSIG",

  /**
   * integrity confidence
   */
  integrityconfidence: "_SECINTCONOBV",

  /**
   * highly reliable
   */
  highlyreliable: "HRELIABLE",

  /**
   * reliable
   */
  reliable: "RELIABLE",

  /**
   * uncertain reliability
   */
  uncertainreliability: "UNCERTREL",

  /**
   * unreliable
   */
  unreliable: "UNRELIABLE",

  /**
   * provenance
   */
  provenance: "_SECINTPRVOBV",

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

  /**
   * integrity status
   */
  integritystatus: "_SECINTSTOBV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityObservationValueCode =
  typeof SecurityIntegrityObservationValueCode[keyof typeof SecurityIntegrityObservationValueCode];
