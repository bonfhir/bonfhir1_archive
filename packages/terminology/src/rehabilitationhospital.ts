/**
 * (X12N 283X00000N)
 * http://terminology.hl7.org/ValueSet/v3-RehabilitationHospital
 */
export const RehabilitationHospitalCode = {
  /**
   * Rehabilitation hospital
   */
  Rehabilitationhospital: "RH",

  /**
   * addiction treatment center
   */
  addictiontreatmentcenter: "RHAT",

  /**
   * intellectual impairment center
   */
  intellectualimpairmentcenter: "RHII",

  /**
   * parents with adjustment difficulties center
   */
  parentswithadjustmentdifficultiescenter: "RHMAD",

  /**
   * physical impairment center
   */
  physicalimpairmentcenter: "RHPI",

  /**
   * physical impairment - hearing center
   */
  physicalimpairmenthearingcenter: "RHPIH",

  /**
   * physical impairment - motor skills center
   */
  physicalimpairmentmotorskillscenter: "RHPIMS",

  /**
   * physical impairment - visual skills center
   */
  physicalimpairmentvisualskillscenter: "RHPIVS",

  /**
   * youths with adjustment difficulties center
   */
  youthswithadjustmentdifficultiescenter: "RHYAD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RehabilitationHospitalCode =
  typeof RehabilitationHospitalCode[keyof typeof RehabilitationHospitalCode];
