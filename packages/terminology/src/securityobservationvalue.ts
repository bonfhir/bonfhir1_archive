/**
 * Observation values used to indicate security observation metadata.
 * http://terminology.hl7.org/ValueSet/v3-SecurityObservationValue
 */
export const SecurityObservationValueCode = {
  /**
   * SecurityObservationValue
   */
  _SecurityObservationValue: "_SecurityObservationValue",

  /**
   * security category
   */
  _SECCATOBV: "_SECCATOBV",

  /**
   * security classification
   */
  _SECCLASSOBV: "_SECCLASSOBV",

  /**
   * security control
   */
  _SECCONOBV: "_SECCONOBV",

  /**
   * security integrity
   */
  _SECINTOBV: "_SECINTOBV",

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

  /**
   * security trust observation
   */
  SECTRSTOBV: "SECTRSTOBV",

  /**
   * trust accreditation observation
   */
  TRSTACCRDOBV: "TRSTACCRDOBV",

  /**
   * trust agreement observation
   */
  TRSTAGREOBV: "TRSTAGREOBV",

  /**
   * trust certificate observation
   */
  TRSTCERTOBV: "TRSTCERTOBV",

  /**
   * none supplied 5
   */
  TRSTFWKOBV: "TRSTFWKOBV",

  /**
   * trust assurance observation
   */
  TRSTLOAOBV: "TRSTLOAOBV",

  /**
   * authentication level of assurance value
   */
  LOAAN: "LOAAN",

  /**
   * low authentication level of assurance
   */
  LOAAN1: "LOAAN1",

  /**
   * basic authentication level of assurance
   */
  LOAAN2: "LOAAN2",

  /**
   * medium authentication level of assurance
   */
  LOAAN3: "LOAAN3",

  /**
   * high authentication level of assurance
   */
  LOAAN4: "LOAAN4",

  /**
   * authentication process level of assurance value
   */
  LOAAP: "LOAAP",

  /**
   * low authentication process level of assurance
   */
  LOAAP1: "LOAAP1",

  /**
   * basic authentication process level of assurance
   */
  LOAAP2: "LOAAP2",

  /**
   * medium authentication process level of assurance
   */
  LOAAP3: "LOAAP3",

  /**
   * high authentication process level of assurance
   */
  LOAAP4: "LOAAP4",

  /**
   * assertion level of assurance value
   */
  LOAAS: "LOAAS",

  /**
   * low assertion level of assurance
   */
  LOAAS1: "LOAAS1",

  /**
   * basic assertion level of assurance
   */
  LOAAS2: "LOAAS2",

  /**
   * medium assertion level of assurance
   */
  LOAAS3: "LOAAS3",

  /**
   * high assertion level of assurance
   */
  LOAAS4: "LOAAS4",

  /**
   * token and credential management level of assurance value)
   */
  LOACM: "LOACM",

  /**
   * low token and credential management level of assurance
   */
  LOACM1: "LOACM1",

  /**
   * basic token and credential management level of assurance
   */
  LOACM2: "LOACM2",

  /**
   * medium token and credential management level of assurance
   */
  LOACM3: "LOACM3",

  /**
   * high token and credential management level of assurance
   */
  LOACM4: "LOACM4",

  /**
   * identity proofing level of assurance
   */
  LOAID: "LOAID",

  /**
   * low identity proofing level of assurance
   */
  LOAID1: "LOAID1",

  /**
   * basic identity proofing level of assurance
   */
  LOAID2: "LOAID2",

  /**
   * medium identity proofing level of assurance
   */
  LOAID3: "LOAID3",

  /**
   * high identity proofing level of assurance
   */
  LOAID4: "LOAID4",

  /**
   * non-repudiation level of assurance value
   */
  LOANR: "LOANR",

  /**
   * low non-repudiation level of assurance
   */
  LOANR1: "LOANR1",

  /**
   * basic non-repudiation level of assurance
   */
  LOANR2: "LOANR2",

  /**
   * medium non-repudiation level of assurance
   */
  LOANR3: "LOANR3",

  /**
   * high non-repudiation level of assurance
   */
  LOANR4: "LOANR4",

  /**
   * remote access level of assurance value
   */
  LOARA: "LOARA",

  /**
   * low remote access level of assurance
   */
  LOARA1: "LOARA1",

  /**
   * basic remote access level of assurance
   */
  LOARA2: "LOARA2",

  /**
   * medium remote access level of assurance
   */
  LOARA3: "LOARA3",

  /**
   * high remote access level of assurance
   */
  LOARA4: "LOARA4",

  /**
   * token level of assurance value
   */
  LOATK: "LOATK",

  /**
   * low token level of assurance
   */
  LOATK1: "LOATK1",

  /**
   * basic token level of assurance
   */
  LOATK2: "LOATK2",

  /**
   * medium token level of assurance
   */
  LOATK3: "LOATK3",

  /**
   * high token level of assurance
   */
  LOATK4: "LOATK4",

  /**
   * none supplied 6
   */
  TRSTMECOBV: "TRSTMECOBV",

  /**
   * low
   */
  L: "L",

  /**
   * moderate
   */
  M: "M",

  /**
   * normal
   */
  N: "N",

  /**
   * restricted
   */
  R: "R",

  /**
   * unrestricted
   */
  U: "U",

  /**
   * very restricted
   */
  V: "V",

  /**
   * Confidentiality
   */
  _Confidentiality: "_Confidentiality",

  /**
   * ConfidentialityByAccessKind
   */
  _ConfidentialityByAccessKind: "_ConfidentialityByAccessKind",

  /**
   * business
   */
  B: "B",

  /**
   * clinician
   */
  D: "D",

  /**
   * individual
   */
  I: "I",

  /**
   * ConfidentialityByInfoType
   */
  _ConfidentialityByInfoType: "_ConfidentialityByInfoType",

  /**
   * substance abuse related
   */
  ETH: "ETH",

  /**
   * HIV related
   */
  HIV: "HIV",

  /**
   * psychiatry relate
   */
  PSY: "PSY",

  /**
   * sexual and domestic violence related
   */
  SDV: "SDV",

  /**
   * ConfidentialityModifiers
   */
  _ConfidentialityModifiers: "_ConfidentialityModifiers",

  /**
   * celebrity
   */
  C: "C",

  /**
   * sensitive
   */
  S: "S",

  /**
   * taboo
   */
  T: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityObservationValueCode =
  typeof SecurityObservationValueCode[keyof typeof SecurityObservationValueCode];
