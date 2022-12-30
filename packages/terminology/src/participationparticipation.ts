/**
 * Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.

This should **not** be used except when no more specific participation type is known or when the participation type is further clarified elsewhere. It should not be used lightly, and should never be used as a "placeholder" when a more appropriate specific type does not yet exist.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationParticipation
 */
export const ParticipationParticipationCode = {
  /**
   * Participation
   */
  PART: "PART",

  /**
   * ParticipationAncillary
   */
  _ParticipationAncillary: "_ParticipationAncillary",

  /**
   * admitter
   */
  ADM: "ADM",

  /**
   * attender
   */
  ATND: "ATND",

  /**
   * callback contact
   */
  CALLBCK: "CALLBCK",

  /**
   * consultant
   */
  CON: "CON",

  /**
   * discharger
   */
  DIS: "DIS",

  /**
   * escort
   */
  ESC: "ESC",

  /**
   * referrer
   */
  REF: "REF",

  /**
   * ParticipationInformationGenerator
   */
  _ParticipationInformationGenerator: "_ParticipationInformationGenerator",

  /**
   * author (originator)
   */
  AUT: "AUT",

  /**
   * informant
   */
  INF: "INF",

  /**
   * Transcriber
   */
  TRANS: "TRANS",

  /**
   * data entry person
   */
  ENT: "ENT",

  /**
   * witness
   */
  WIT: "WIT",

  /**
   * custodian
   */
  CST: "CST",

  /**
   * direct target
   */
  DIR: "DIR",

  /**
   * analyte
   */
  ALY: "ALY",

  /**
   * baby
   */
  BBY: "BBY",

  /**
   * catalyst
   */
  CAT: "CAT",

  /**
   * consumable
   */
  CSM: "CSM",

  /**
   * therapeutic agent
   */
  TPA: "TPA",

  /**
   * device
   */
  DEV: "DEV",

  /**
   * non-reuseable device
   */
  NRD: "NRD",

  /**
   * reusable device
   */
  RDV: "RDV",

  /**
   * donor
   */
  DON: "DON",

  /**
   * ExposureAgent
   */
  EXPAGNT: "EXPAGNT",

  /**
   * ExposureParticipation
   */
  EXPART: "EXPART",

  /**
   * ExposureTarget
   */
  EXPTRGT: "EXPTRGT",

  /**
   * ExposureSource
   */
  EXSRC: "EXSRC",

  /**
   * product
   */
  PRD: "PRD",

  /**
   * subject
   */
  SBJ: "SBJ",

  /**
   * specimen
   */
  SPC: "SPC",

  /**
   * indirect target
   */
  IND: "IND",

  /**
   * beneficiary
   */
  BEN: "BEN",

  /**
   * causative agent
   */
  CAGNT: "CAGNT",

  /**
   * coverage target
   */
  COV: "COV",

  /**
   * guarantor party
   */
  GUAR: "GUAR",

  /**
   * holder
   */
  HLD: "HLD",

  /**
   * record target
   */
  RCT: "RCT",

  /**
   * receiver
   */
  RCV: "RCV",

  /**
   * information recipient
   */
  IRCP: "IRCP",

  /**
   * ugent notification contact
   */
  NOT: "NOT",

  /**
   * primary information recipient
   */
  PRCP: "PRCP",

  /**
   * Referred By
   */
  REFB: "REFB",

  /**
   * Referred to
   */
  REFT: "REFT",

  /**
   * tracker
   */
  TRC: "TRC",

  /**
   * location
   */
  LOC: "LOC",

  /**
   * destination
   */
  DST: "DST",

  /**
   * entry location
   */
  ELOC: "ELOC",

  /**
   * origin
   */
  ORG: "ORG",

  /**
   * remote
   */
  RML: "RML",

  /**
   * via
   */
  VIA: "VIA",

  /**
   * performer
   */
  PRF: "PRF",

  /**
   * distributor
   */
  DIST: "DIST",

  /**
   * primary performer
   */
  PPRF: "PPRF",

  /**
   * secondary performer
   */
  SPRF: "SPRF",

  /**
   * responsible party
   */
  RESP: "RESP",

  /**
   * verifier
   */
  VRF: "VRF",

  /**
   * authenticator
   */
  AUTHEN: "AUTHEN",

  /**
   * legal authenticator
   */
  LA: "LA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationParticipationCode =
  typeof ParticipationParticipationCode[keyof typeof ParticipationParticipationCode];
