/**
 * **Definition:** Set of codes indicating the manner in which underwriters participate in a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-UnderwriterParticipationFunction
 */
export const UnderwriterParticipationFunctionCode = {
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
export type UnderwriterParticipationFunctionCode =
  typeof UnderwriterParticipationFunctionCode[keyof typeof UnderwriterParticipationFunctionCode];
