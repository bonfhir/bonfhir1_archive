/**
 * **Definition:** Set of codes indicating the manner in which sponsors participate in a policy or program. NOTE: use only when the Sponsor is not further specified with a SponsorRoleType as being either a fully insured sponsor or a self insured sponsor.
 * http://terminology.hl7.org/ValueSet/v3-SponsorParticipationFunction
 */
export const SponsorParticipationFunctionCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SponsorParticipationFunctionCode =
  typeof SponsorParticipationFunctionCode[keyof typeof SponsorParticipationFunctionCode];
