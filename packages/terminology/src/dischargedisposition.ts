/**
 * This value set defines a set of codes that can be used to where the patient left the hospital.
 * http://terminology.hl7.org/ValueSet/encounter-discharge-disposition
 */
export const DischargeDispositionCode = {
  /**
   * Home
   */
  Home: "home",

  /**
   * Alternative home
   */
  Alternativehome: "alt-home",

  /**
   * Other healthcare facility
   */
  Otherhealthcarefacility: "other-hcf",

  /**
   * Hospice
   */
  Hospice: "hosp",

  /**
   * Long-term care
   */
  Longtermcare: "long",

  /**
   * Left against advice
   */
  Leftagainstadvice: "aadvice",

  /**
   * Expired
   */
  Expired: "exp",

  /**
   * Psychiatric hospital
   */
  Psychiatrichospital: "psy",

  /**
   * Rehabilitation
   */
  Rehabilitation: "rehab",

  /**
   * Skilled nursing facility
   */
  Skillednursingfacility: "snf",

  /**
   * Other
   */
  Other: "oth",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DischargeDispositionCode =
  typeof DischargeDispositionCode[keyof typeof DischargeDispositionCode];
