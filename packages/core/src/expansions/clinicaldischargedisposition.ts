/**
 * This value set defines a set of codes that can be used to where the patient left the hospital. Note that this value set explicitly removes 'oth' (Other) to allow the binding strength to be extensible and therefore allow the exchange of additional concepts without requiring mapping to 'oth.'
 * http://terminology.hl7.org/ValueSet/clinical-discharge-disposition
 */
export const ClinicalDischargeDispositionCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClinicalDischargeDispositionCode =
  typeof ClinicalDischargeDispositionCode[keyof typeof ClinicalDischargeDispositionCode];
