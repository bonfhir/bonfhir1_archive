/**
 * This value set defines a set of codes that can be used to where the patient left the hospital.
 * http://terminology.hl7.org/ValueSet/encounter-discharge-disposition
 */
export const DischargeDispositionCode = {
  /**
   * Home
   */
  home: "home",

  /**
   * Alternative home
   */
  "alt-home": "alt-home",

  /**
   * Other healthcare facility
   */
  "other-hcf": "other-hcf",

  /**
   * Hospice
   */
  hosp: "hosp",

  /**
   * Long-term care
   */
  long: "long",

  /**
   * Left against advice
   */
  aadvice: "aadvice",

  /**
   * Expired
   */
  exp: "exp",

  /**
   * Psychiatric hospital
   */
  psy: "psy",

  /**
   * Rehabilitation
   */
  rehab: "rehab",

  /**
   * Skilled nursing facility
   */
  snf: "snf",

  /**
   * Other
   */
  oth: "oth",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DischargeDispositionCode =
  typeof DischargeDispositionCode[keyof typeof DischargeDispositionCode];
