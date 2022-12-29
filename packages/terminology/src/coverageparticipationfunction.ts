/**
 * **Definition:** Set of codes indicating the manner in which sponsors, underwriters, and payers participate in a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-CoverageParticipationFunction
 */
export const CoverageParticipationFunctionCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageParticipationFunctionCode =
  typeof CoverageParticipationFunctionCode[keyof typeof CoverageParticipationFunctionCode];
