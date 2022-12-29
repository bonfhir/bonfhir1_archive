/**
 * Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.

This should **not** be used except when no more specific participation type is known or when the participation type is further clarified elsewhere. It should not be used lightly, and should never be used as a "placeholder" when a more appropriate specific type does not yet exist.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationParticipation
 */
export const ParticipationParticipationCode = {
  /**
   * Participation
   */
  Participation: "PART",

  /**
   * ParticipationAncillary
   */
  ParticipationAncillary: "_ParticipationAncillary",

  /**
   * admitter
   */
  admitter: "ADM",

  /**
   * attender
   */
  attender: "ATND",

  /**
   * callback contact
   */
  callbackcontact: "CALLBCK",

  /**
   * consultant
   */
  consultant: "CON",

  /**
   * discharger
   */
  discharger: "DIS",

  /**
   * escort
   */
  escort: "ESC",

  /**
   * referrer
   */
  referrer: "REF",

  /**
   * ParticipationInformationGenerator
   */
  ParticipationInformationGenerator: "_ParticipationInformationGenerator",

  /**
   * author (originator)
   */
  authororiginator: "AUT",

  /**
   * informant
   */
  informant: "INF",

  /**
   * Transcriber
   */
  Transcriber: "TRANS",

  /**
   * data entry person
   */
  dataentryperson: "ENT",

  /**
   * witness
   */
  witness: "WIT",

  /**
   * custodian
   */
  custodian: "CST",

  /**
   * direct target
   */
  directtarget: "DIR",

  /**
   * analyte
   */
  analyte: "ALY",

  /**
   * baby
   */
  baby: "BBY",

  /**
   * catalyst
   */
  catalyst: "CAT",

  /**
   * consumable
   */
  consumable: "CSM",

  /**
   * therapeutic agent
   */
  therapeuticagent: "TPA",

  /**
   * device
   */
  device: "DEV",

  /**
   * non-reuseable device
   */
  nonreuseabledevice: "NRD",

  /**
   * reusable device
   */
  reusabledevice: "RDV",

  /**
   * donor
   */
  donor: "DON",

  /**
   * ExposureAgent
   */
  ExposureAgent: "EXPAGNT",

  /**
   * ExposureParticipation
   */
  ExposureParticipation: "EXPART",

  /**
   * ExposureTarget
   */
  ExposureTarget: "EXPTRGT",

  /**
   * ExposureSource
   */
  ExposureSource: "EXSRC",

  /**
   * product
   */
  product: "PRD",

  /**
   * subject
   */
  subject: "SBJ",

  /**
   * specimen
   */
  specimen: "SPC",

  /**
   * indirect target
   */
  indirecttarget: "IND",

  /**
   * beneficiary
   */
  beneficiary: "BEN",

  /**
   * causative agent
   */
  causativeagent: "CAGNT",

  /**
   * coverage target
   */
  coveragetarget: "COV",

  /**
   * guarantor party
   */
  guarantorparty: "GUAR",

  /**
   * holder
   */
  holder: "HLD",

  /**
   * record target
   */
  recordtarget: "RCT",

  /**
   * receiver
   */
  receiver: "RCV",

  /**
   * information recipient
   */
  informationrecipient: "IRCP",

  /**
   * ugent notification contact
   */
  ugentnotificationcontact: "NOT",

  /**
   * primary information recipient
   */
  primaryinformationrecipient: "PRCP",

  /**
   * Referred By
   */
  ReferredBy: "REFB",

  /**
   * Referred to
   */
  Referredto: "REFT",

  /**
   * tracker
   */
  tracker: "TRC",

  /**
   * location
   */
  location: "LOC",

  /**
   * destination
   */
  destination: "DST",

  /**
   * entry location
   */
  entrylocation: "ELOC",

  /**
   * origin
   */
  origin: "ORG",

  /**
   * remote
   */
  remote: "RML",

  /**
   * via
   */
  via: "VIA",

  /**
   * performer
   */
  performer: "PRF",

  /**
   * distributor
   */
  distributor: "DIST",

  /**
   * primary performer
   */
  primaryperformer: "PPRF",

  /**
   * secondary performer
   */
  secondaryperformer: "SPRF",

  /**
   * responsible party
   */
  responsibleparty: "RESP",

  /**
   * verifier
   */
  verifier: "VRF",

  /**
   * authenticator
   */
  authenticator: "AUTHEN",

  /**
   * legal authenticator
   */
  legalauthenticator: "LA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationParticipationCode =
  typeof ParticipationParticipationCode[keyof typeof ParticipationParticipationCode];
