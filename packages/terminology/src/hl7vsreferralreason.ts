/**
 * Value Set of codes that specify the reason for which the referral will take place.
 * http://terminology.hl7.org/ValueSet/v2-0336
 */
export const Hl7VSReferralReasonCode = {
  /**
   * Second Opinion
   */
  SecondOpinion: "S",

  /**
   * Patient Preference
   */
  PatientPreference: "P",

  /**
   * Provider Ordered
   */
  ProviderOrdered: "O",

  /**
   * Work Load
   */
  WorkLoad: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReferralReasonCode =
  typeof Hl7VSReferralReasonCode[keyof typeof Hl7VSReferralReasonCode];
