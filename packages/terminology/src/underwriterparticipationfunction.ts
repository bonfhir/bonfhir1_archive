/**
 * **Definition:** Set of codes indicating the manner in which underwriters participate in a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-UnderwriterParticipationFunction
 */
export const UnderwriterParticipationFunctionCode = {
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
export type UnderwriterParticipationFunctionCode =
  typeof UnderwriterParticipationFunctionCode[keyof typeof UnderwriterParticipationFunctionCode];
