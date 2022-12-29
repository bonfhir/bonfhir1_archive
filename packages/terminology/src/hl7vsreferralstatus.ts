/**
 * Value Set of codes that define the state of a  referral.
 * http://terminology.hl7.org/ValueSet/v2-0283
 */
export const Hl7VSReferralStatusCode = {
  /**
   * Accepted
   */
  Accepted: "A",

  /**
   * Pending
   */
  Pending: "P",

  /**
   * Rejected
   */
  Rejected: "R",

  /**
   * Expired
   */
  Expired: "E",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReferralStatusCode =
  typeof Hl7VSReferralStatusCode[keyof typeof Hl7VSReferralStatusCode];
