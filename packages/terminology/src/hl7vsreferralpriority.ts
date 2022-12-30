/**
 * Value Set of codes that designate the urgency of a  referral.
 * http://terminology.hl7.org/ValueSet/v2-0280
 */
export const Hl7VSReferralPriorityCode = {
  /**
   * STAT
   */
  S: "S",

  /**
   * ASAP
   */
  A: "A",

  /**
   * Routine
   */
  R: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReferralPriorityCode =
  typeof Hl7VSReferralPriorityCode[keyof typeof Hl7VSReferralPriorityCode];
