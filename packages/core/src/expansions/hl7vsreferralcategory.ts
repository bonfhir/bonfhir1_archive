/**
 * Value Set of codes that describe the patient care setting where a referral should take place.
 * http://terminology.hl7.org/ValueSet/v2-0284
 */
export const Hl7VSReferralCategoryCode = {
  /**
   * Inpatient
   */
  I: "I",

  /**
   * Outpatient
   */
  O: "O",

  /**
   * Ambulatory
   */
  A: "A",

  /**
   * Emergency
   */
  E: "E",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReferralCategoryCode =
  typeof Hl7VSReferralCategoryCode[keyof typeof Hl7VSReferralCategoryCode];
