/**
 * **Definition:** Set of codes indicating the manner in which sponsors, underwriters, and payers participate in a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-CoverageParticipationFunction
 */
export const CoverageParticipationFunctionCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageParticipationFunctionCode =
  typeof CoverageParticipationFunctionCode[keyof typeof CoverageParticipationFunctionCode];
