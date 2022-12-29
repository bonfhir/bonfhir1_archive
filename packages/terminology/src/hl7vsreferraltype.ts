/**
 * Value Set of codes that identify the general category of healthcare professional desired to satisfy a referral.
 * http://terminology.hl7.org/ValueSet/v2-0281
 */
export const Hl7VSReferralTypeCode = {
  /**
   * Home Care
   */
  HomeCare: "HOM",

  /**
   * Laboratory
   */
  Laboratory: "LAB",

  /**
   * Medical
   */
  Medical: "MED",

  /**
   * Psychiatric
   */
  Psychiatric: "PSY",

  /**
   * Radiology
   */
  Radiology: "RAD",

  /**
   * Skilled Nursing
   */
  SkilledNursing: "SKN",

  /**
   * Laboratory
   */
  Laboratory: "Lab",

  /**
   * Radiology
   */
  Radiology: "Rad",

  /**
   * Medical
   */
  Medical: "Med",

  /**
   * Skilled Nursing
   */
  SkilledNursing: "Skn",

  /**
   * Psychiatric
   */
  Psychiatric: "Psy",

  /**
   * Home Care
   */
  HomeCare: "Hom",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReferralTypeCode =
  typeof Hl7VSReferralTypeCode[keyof typeof Hl7VSReferralTypeCode];
