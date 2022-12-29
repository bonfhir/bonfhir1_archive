/**
 * This code is used to specify the exact function an actor had in a service in all necessary detail. This domain may include local extensions (CWE).
 * http://terminology.hl7.org/ValueSet/v3-ParticipationFunction
 */
export const ParticipationFunctionCode = {
  /**
   * AuthorizedParticipationFunction
   */
  AuthorizedParticipationFunction: "_AuthorizedParticipationFunction",

  /**
   * AuthorizedReceiverParticipationFunction
   */
  AuthorizedReceiverParticipationFunction:
    "_AuthorizedReceiverParticipationFunction",

  /**
   * caregiver information receiver
   */
  caregiverinformationreceiver: "AUCG",

  /**
   * legitimate relationship information receiver
   */
  legitimaterelationshipinformationreceiver: "AULR",

  /**
   * care team information receiver
   */
  careteaminformationreceiver: "AUTM",

  /**
   * work area information receiver
   */
  workareainformationreceiver: "AUWA",

  /**
   * ConsenterParticipationFunction
   */
  ConsenterParticipationFunction: "_ConsenterParticipationFunction",

  /**
   * legal guardian consent author
   */
  legalguardianconsentauthor: "GRDCON",

  /**
   * healthcare power of attorney consent author
   */
  healthcarepowerofattorneyconsentauthor: "POACON",

  /**
   * personal representative consent author
   */
  personalrepresentativeconsentauthor: "PRCON",

  /**
   * authorized provider masking author
   */
  authorizedprovidermaskingauthor: "PROMSK",

  /**
   * subject of consent author
   */
  subjectofconsentauthor: "SUBCON",

  /**
   * OverriderParticipationFunction
   */
  OverriderParticipationFunction: "_OverriderParticipationFunction",

  /**
   * consent overrider
   */
  consentoverrider: "AUCOV",

  /**
   * emergency overrider
   */
  emergencyoverrider: "AUEMROV",

  /**
   * CoverageParticipationFunction
   */
  CoverageParticipationFunction: "_CoverageParticipationFunction",

  /**
   * PayorParticipationFunction
   */
  PayorParticipationFunction: "_PayorParticipationFunction",

  /**
   * claims adjudication
   */
  claimsadjudication: "CLMADJ",

  /**
   * enrollment broker
   */
  enrollmentbroker: "ENROLL",

  /**
   * ffs management
   */
  ffsmanagement: "FFSMGT",

  /**
   * managed care management
   */
  managedcaremanagement: "MCMGT",

  /**
   * provider management
   */
  providermanagement: "PROVMGT",

  /**
   * utilization management
   */
  utilizationmanagement: "UMGT",

  /**
   * SponsorParticipationFunction
   */
  SponsorParticipationFunction: "_SponsorParticipationFunction",

  /**
   * fully insured
   */
  fullyinsured: "FULINRD",

  /**
   * self insured
   */
  selfinsured: "SELFINRD",

  /**
   * UnderwriterParticipationFunction
   */
  UnderwriterParticipationFunction: "_UnderwriterParticipationFunction",

  /**
   * payor contracting
   */
  payorcontracting: "PAYORCNTR",

  /**
   * reinsures
   */
  reinsures: "REINS",

  /**
   * retrocessionaires
   */
  retrocessionaires: "RETROCES",

  /**
   * subcontracting risk
   */
  subcontractingrisk: "SUBCTRT",

  /**
   * underwriting
   */
  underwriting: "UNDERWRTNG",

  /**
   * admitting physician
   */
  admittingphysician: "ADMPHYS",

  /**
   * anesthesist
   */
  anesthesist: "ANEST",

  /**
   * anesthesia nurse
   */
  anesthesianurse: "ANRS",

  /**
   * assembly software
   */
  assemblysoftware: "ASSEMBLER",

  /**
   * attending physician
   */
  attendingphysician: "ATTPHYS",

  /**
   * composer software
   */
  composersoftware: "COMPOSER",

  /**
   * discharging physician
   */
  dischargingphysician: "DISPHYS",

  /**
   * first assistant surgeon
   */
  firstassistantsurgeon: "FASST",

  /**
   * midwife
   */
  midwife: "MDWF",

  /**
   * nurse assistant
   */
  nurseassistant: "NASST",

  /**
   * primary care physician
   */
  primarycarephysician: "PCP",

  /**
   * primary surgeon
   */
  primarysurgeon: "PRISURG",

  /**
   * reviewer
   */
  reviewer: "REVIEWER",

  /**
   * rounding physician
   */
  roundingphysician: "RNDPHYS",

  /**
   * second assistant surgeon
   */
  secondassistantsurgeon: "SASST",

  /**
   * scrub nurse
   */
  scrubnurse: "SNRS",

  /**
   * third assistant
   */
  thirdassistant: "TASST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationFunctionCode =
  typeof ParticipationFunctionCode[keyof typeof ParticipationFunctionCode];
