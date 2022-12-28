/**
 * **Definition:** Set of codes indicating the manner in which sponsors, underwriters, and payers participate in a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-CoverageParticipationFunction
 */
export const CoverageParticipationFunctionCode = {
  /**
   * CoverageParticipationFunction
   */
  _CoverageParticipationFunction: "_CoverageParticipationFunction",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageParticipationFunctionCode =
  typeof CoverageParticipationFunctionCode[keyof typeof CoverageParticipationFunctionCode];
