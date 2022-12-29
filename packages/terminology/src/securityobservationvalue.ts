/**
 * Observation values used to indicate security observation metadata.
 * http://terminology.hl7.org/ValueSet/v3-SecurityObservationValue
 */
export const SecurityObservationValueCode = {
  /**
   * SecurityObservationValue
   */
  SecurityObservationValue: "_SecurityObservationValue",

  /**
   * security category
   */
  securitycategory: "_SECCATOBV",

  /**
   * security classification
   */
  securityclassification: "_SECCLASSOBV",

  /**
   * security control
   */
  securitycontrol: "_SECCONOBV",

  /**
   * security integrity
   */
  securityintegrity: "_SECINTOBV",

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

  /**
   * security trust observation
   */
  securitytrustobservation: "SECTRSTOBV",

  /**
   * trust accreditation observation
   */
  trustaccreditationobservation: "TRSTACCRDOBV",

  /**
   * trust agreement observation
   */
  trustagreementobservation: "TRSTAGREOBV",

  /**
   * trust certificate observation
   */
  trustcertificateobservation: "TRSTCERTOBV",

  /**
   * none supplied 5
   */
  nonesupplied5: "TRSTFWKOBV",

  /**
   * trust assurance observation
   */
  trustassuranceobservation: "TRSTLOAOBV",

  /**
   * authentication level of assurance value
   */
  authenticationlevelofassurancevalue: "LOAAN",

  /**
   * low authentication level of assurance
   */
  lowauthenticationlevelofassurance: "LOAAN1",

  /**
   * basic authentication level of assurance
   */
  basicauthenticationlevelofassurance: "LOAAN2",

  /**
   * medium authentication level of assurance
   */
  mediumauthenticationlevelofassurance: "LOAAN3",

  /**
   * high authentication level of assurance
   */
  highauthenticationlevelofassurance: "LOAAN4",

  /**
   * authentication process level of assurance value
   */
  authenticationprocesslevelofassurancevalue: "LOAAP",

  /**
   * low authentication process level of assurance
   */
  lowauthenticationprocesslevelofassurance: "LOAAP1",

  /**
   * basic authentication process level of assurance
   */
  basicauthenticationprocesslevelofassurance: "LOAAP2",

  /**
   * medium authentication process level of assurance
   */
  mediumauthenticationprocesslevelofassurance: "LOAAP3",

  /**
   * high authentication process level of assurance
   */
  highauthenticationprocesslevelofassurance: "LOAAP4",

  /**
   * assertion level of assurance value
   */
  assertionlevelofassurancevalue: "LOAAS",

  /**
   * low assertion level of assurance
   */
  lowassertionlevelofassurance: "LOAAS1",

  /**
   * basic assertion level of assurance
   */
  basicassertionlevelofassurance: "LOAAS2",

  /**
   * medium assertion level of assurance
   */
  mediumassertionlevelofassurance: "LOAAS3",

  /**
   * high assertion level of assurance
   */
  highassertionlevelofassurance: "LOAAS4",

  /**
   * token and credential management level of assurance value)
   */
  tokenandcredentialmanagementlevelofassurancevalue: "LOACM",

  /**
   * low token and credential management level of assurance
   */
  lowtokenandcredentialmanagementlevelofassurance: "LOACM1",

  /**
   * basic token and credential management level of assurance
   */
  basictokenandcredentialmanagementlevelofassurance: "LOACM2",

  /**
   * medium token and credential management level of assurance
   */
  mediumtokenandcredentialmanagementlevelofassurance: "LOACM3",

  /**
   * high token and credential management level of assurance
   */
  hightokenandcredentialmanagementlevelofassurance: "LOACM4",

  /**
   * identity proofing level of assurance
   */
  identityproofinglevelofassurance: "LOAID",

  /**
   * low identity proofing level of assurance
   */
  lowidentityproofinglevelofassurance: "LOAID1",

  /**
   * basic identity proofing level of assurance
   */
  basicidentityproofinglevelofassurance: "LOAID2",

  /**
   * medium identity proofing level of assurance
   */
  mediumidentityproofinglevelofassurance: "LOAID3",

  /**
   * high identity proofing level of assurance
   */
  highidentityproofinglevelofassurance: "LOAID4",

  /**
   * non-repudiation level of assurance value
   */
  nonrepudiationlevelofassurancevalue: "LOANR",

  /**
   * low non-repudiation level of assurance
   */
  lownonrepudiationlevelofassurance: "LOANR1",

  /**
   * basic non-repudiation level of assurance
   */
  basicnonrepudiationlevelofassurance: "LOANR2",

  /**
   * medium non-repudiation level of assurance
   */
  mediumnonrepudiationlevelofassurance: "LOANR3",

  /**
   * high non-repudiation level of assurance
   */
  highnonrepudiationlevelofassurance: "LOANR4",

  /**
   * remote access level of assurance value
   */
  remoteaccesslevelofassurancevalue: "LOARA",

  /**
   * low remote access level of assurance
   */
  lowremoteaccesslevelofassurance: "LOARA1",

  /**
   * basic remote access level of assurance
   */
  basicremoteaccesslevelofassurance: "LOARA2",

  /**
   * medium remote access level of assurance
   */
  mediumremoteaccesslevelofassurance: "LOARA3",

  /**
   * high remote access level of assurance
   */
  highremoteaccesslevelofassurance: "LOARA4",

  /**
   * token level of assurance value
   */
  tokenlevelofassurancevalue: "LOATK",

  /**
   * low token level of assurance
   */
  lowtokenlevelofassurance: "LOATK1",

  /**
   * basic token level of assurance
   */
  basictokenlevelofassurance: "LOATK2",

  /**
   * medium token level of assurance
   */
  mediumtokenlevelofassurance: "LOATK3",

  /**
   * high token level of assurance
   */
  hightokenlevelofassurance: "LOATK4",

  /**
   * none supplied 6
   */
  nonesupplied6: "TRSTMECOBV",

  /**
   * low
   */
  low: "L",

  /**
   * moderate
   */
  moderate: "M",

  /**
   * normal
   */
  normal: "N",

  /**
   * restricted
   */
  restricted: "R",

  /**
   * unrestricted
   */
  unrestricted: "U",

  /**
   * very restricted
   */
  veryrestricted: "V",

  /**
   * Confidentiality
   */
  Confidentiality: "_Confidentiality",

  /**
   * ConfidentialityByAccessKind
   */
  ConfidentialityByAccessKind: "_ConfidentialityByAccessKind",

  /**
   * business
   */
  business: "B",

  /**
   * clinician
   */
  clinician: "D",

  /**
   * individual
   */
  individual: "I",

  /**
   * ConfidentialityByInfoType
   */
  ConfidentialityByInfoType: "_ConfidentialityByInfoType",

  /**
   * substance abuse related
   */
  substanceabuserelated: "ETH",

  /**
   * HIV related
   */
  HIVrelated: "HIV",

  /**
   * psychiatry relate
   */
  psychiatryrelate: "PSY",

  /**
   * sexual and domestic violence related
   */
  sexualanddomesticviolencerelated: "SDV",

  /**
   * ConfidentialityModifiers
   */
  ConfidentialityModifiers: "_ConfidentialityModifiers",

  /**
   * celebrity
   */
  celebrity: "C",

  /**
   * sensitive
   */
  sensitive: "S",

  /**
   * taboo
   */
  taboo: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityObservationValueCode =
  typeof SecurityObservationValueCode[keyof typeof SecurityObservationValueCode];
