/**
 * Value Set of codes that identify the expected response from the healthcare professional receiving a referral.
 * http://terminology.hl7.org/ValueSet/v2-0282
 */
export const Hl7VSReferralDispositionCode = {
  /**
   * Send Written Report
   */
  WR: "WR",

  /**
   * Return Patient After Evaluation
   */
  RP: "RP",

  /**
   * Assume Management
   */
  AM: "AM",

  /**
   * Second Opinion
   */
  SO: "SO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReferralDispositionCode =
  typeof Hl7VSReferralDispositionCode[keyof typeof Hl7VSReferralDispositionCode];
