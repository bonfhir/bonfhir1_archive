/**
 * This value set defines a set of codes that can be used to where the patient left the hospital. Note that this value set explicitly removes 'oth' (Other) to allow the binding strength to be extensible and therefore allow the exchange of additional concepts without requiring mapping to 'oth.'
 * http://terminology.hl7.org/ValueSet/clinical-discharge-disposition
 */
export const ClinicalDischargeDispositionCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClinicalDischargeDispositionCode =
  typeof ClinicalDischargeDispositionCode[keyof typeof ClinicalDischargeDispositionCode];
