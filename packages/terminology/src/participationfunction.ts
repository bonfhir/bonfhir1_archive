/**
 * This code is used to specify the exact function an actor had in a service in all necessary detail. This domain may include local extensions (CWE).
 * http://terminology.hl7.org/ValueSet/v3-ParticipationFunction
 */
export const ParticipationFunctionCode = {
  /**
   * AuthorizedParticipationFunction
   */
  _AuthorizedParticipationFunction: "_AuthorizedParticipationFunction",

  /**
   * AuthorizedReceiverParticipationFunction
   */
  _AuthorizedReceiverParticipationFunction:
    "_AuthorizedReceiverParticipationFunction",

  /**
   * caregiver information receiver
   */
  AUCG: "AUCG",

  /**
   * legitimate relationship information receiver
   */
  AULR: "AULR",

  /**
   * care team information receiver
   */
  AUTM: "AUTM",

  /**
   * work area information receiver
   */
  AUWA: "AUWA",

  /**
   * ConsenterParticipationFunction
   */
  _ConsenterParticipationFunction: "_ConsenterParticipationFunction",

  /**
   * legal guardian consent author
   */
  GRDCON: "GRDCON",

  /**
   * healthcare power of attorney consent author
   */
  POACON: "POACON",

  /**
   * personal representative consent author
   */
  PRCON: "PRCON",

  /**
   * authorized provider masking author
   */
  PROMSK: "PROMSK",

  /**
   * subject of consent author
   */
  SUBCON: "SUBCON",

  /**
   * OverriderParticipationFunction
   */
  _OverriderParticipationFunction: "_OverriderParticipationFunction",

  /**
   * consent overrider
   */
  AUCOV: "AUCOV",

  /**
   * emergency overrider
   */
  AUEMROV: "AUEMROV",

  /**
   * CoverageParticipationFunction
   */
  _CoverageParticipationFunction: "_CoverageParticipationFunction",

  /**
   * PayorParticipationFunction
   */
  _PayorParticipationFunction: "_PayorParticipationFunction",

  /**
   * claims adjudication
   */
  CLMADJ: "CLMADJ",

  /**
   * enrollment broker
   */
  ENROLL: "ENROLL",

  /**
   * ffs management
   */
  FFSMGT: "FFSMGT",

  /**
   * managed care management
   */
  MCMGT: "MCMGT",

  /**
   * provider management
   */
  PROVMGT: "PROVMGT",

  /**
   * utilization management
   */
  UMGT: "UMGT",

  /**
   * SponsorParticipationFunction
   */
  _SponsorParticipationFunction: "_SponsorParticipationFunction",

  /**
   * fully insured
   */
  FULINRD: "FULINRD",

  /**
   * self insured
   */
  SELFINRD: "SELFINRD",

  /**
   * UnderwriterParticipationFunction
   */
  _UnderwriterParticipationFunction: "_UnderwriterParticipationFunction",

  /**
   * payor contracting
   */
  PAYORCNTR: "PAYORCNTR",

  /**
   * reinsures
   */
  REINS: "REINS",

  /**
   * retrocessionaires
   */
  RETROCES: "RETROCES",

  /**
   * subcontracting risk
   */
  SUBCTRT: "SUBCTRT",

  /**
   * underwriting
   */
  UNDERWRTNG: "UNDERWRTNG",

  /**
   * admitting physician
   */
  ADMPHYS: "ADMPHYS",

  /**
   * anesthesist
   */
  ANEST: "ANEST",

  /**
   * anesthesia nurse
   */
  ANRS: "ANRS",

  /**
   * assembly software
   */
  ASSEMBLER: "ASSEMBLER",

  /**
   * attending physician
   */
  ATTPHYS: "ATTPHYS",

  /**
   * composer software
   */
  COMPOSER: "COMPOSER",

  /**
   * discharging physician
   */
  DISPHYS: "DISPHYS",

  /**
   * first assistant surgeon
   */
  FASST: "FASST",

  /**
   * midwife
   */
  MDWF: "MDWF",

  /**
   * nurse assistant
   */
  NASST: "NASST",

  /**
   * primary care physician
   */
  PCP: "PCP",

  /**
   * primary surgeon
   */
  PRISURG: "PRISURG",

  /**
   * reviewer
   */
  REVIEWER: "REVIEWER",

  /**
   * rounding physician
   */
  RNDPHYS: "RNDPHYS",

  /**
   * second assistant surgeon
   */
  SASST: "SASST",

  /**
   * scrub nurse
   */
  SNRS: "SNRS",

  /**
   * third assistant
   */
  TASST: "TASST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationFunctionCode =
  typeof ParticipationFunctionCode[keyof typeof ParticipationFunctionCode];
