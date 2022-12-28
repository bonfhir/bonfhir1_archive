/**
 * Value Set of codes that identify the general category of healthcare professional desired to satisfy a referral.
 * http://terminology.hl7.org/ValueSet/v2-0281
 */
export const Hl7VSReferralTypeCode = {
  /**
   * Home Care
   */
  HOM: "HOM",

  /**
   * Laboratory
   */
  LAB: "LAB",

  /**
   * Medical
   */
  MED: "MED",

  /**
   * Psychiatric
   */
  PSY: "PSY",

  /**
   * Radiology
   */
  RAD: "RAD",

  /**
   * Skilled Nursing
   */
  SKN: "SKN",

  /**
   * Laboratory
   */
  Lab: "Lab",

  /**
   * Radiology
   */
  Rad: "Rad",

  /**
   * Medical
   */
  Med: "Med",

  /**
   * Skilled Nursing
   */
  Skn: "Skn",

  /**
   * Psychiatric
   */
  Psy: "Psy",

  /**
   * Home Care
   */
  Hom: "Hom",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReferralTypeCode =
  typeof Hl7VSReferralTypeCode[keyof typeof Hl7VSReferralTypeCode];
