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
   * CoverageParticipationFunction
   */
  _CoverageParticipationFunction: "_CoverageParticipationFunction",

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
