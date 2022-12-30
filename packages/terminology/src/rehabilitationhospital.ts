/**
 * (X12N 283X00000N)
 * http://terminology.hl7.org/ValueSet/v3-RehabilitationHospital
 */
export const RehabilitationHospitalCode = {
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
export type RehabilitationHospitalCode =
  typeof RehabilitationHospitalCode[keyof typeof RehabilitationHospitalCode];
