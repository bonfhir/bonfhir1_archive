/**
 * An acute care institution that provides medical, surgical, or psychiatric care and treatment for the sick or the injured.
 * http://terminology.hl7.org/ValueSet/v3-HospitalPracticeSetting
 */
export const HospitalPracticeSettingCode = {
  /**
   * Hospital
   */
  HOSP: "HOSP",

  /**
   * Chronic Care Facility
   */
  CHR: "CHR",

  /**
   * Hospitals; General Acute Care Hospital
   */
  GACH: "GACH",

  /**
   * Military Hospital
   */
  MHSP: "MHSP",

  /**
   * Psychatric Care Facility
   */
  PSYCHF: "PSYCHF",

  /**
   * Rehabilitation hospital
   */
  RH: "RH",

  /**
   * addiction treatment center
   */
  RHAT: "RHAT",

  /**
   * intellectual impairment center
   */
  RHII: "RHII",

  /**
   * parents with adjustment difficulties center
   */
  RHMAD: "RHMAD",

  /**
   * physical impairment center
   */
  RHPI: "RHPI",

  /**
   * physical impairment - hearing center
   */
  RHPIH: "RHPIH",

  /**
   * physical impairment - motor skills center
   */
  RHPIMS: "RHPIMS",

  /**
   * physical impairment - visual skills center
   */
  RHPIVS: "RHPIVS",

  /**
   * youths with adjustment difficulties center
   */
  RHYAD: "RHYAD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HospitalPracticeSettingCode =
  typeof HospitalPracticeSettingCode[keyof typeof HospitalPracticeSettingCode];
