/**
 * An acute care institution that provides medical, surgical, or psychiatric care and treatment for the sick or the injured.
 * http://terminology.hl7.org/ValueSet/v3-HospitalPracticeSetting
 */
export const HospitalPracticeSettingCode = {
  /**
   * Hospital
   */
  Hospital: "HOSP",

  /**
   * Chronic Care Facility
   */
  ChronicCareFacility: "CHR",

  /**
   * Hospitals; General Acute Care Hospital
   */
  HospitalsGeneralAcuteCareHospital: "GACH",

  /**
   * Military Hospital
   */
  MilitaryHospital: "MHSP",

  /**
   * Psychatric Care Facility
   */
  PsychatricCareFacility: "PSYCHF",

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
export type HospitalPracticeSettingCode =
  typeof HospitalPracticeSettingCode[keyof typeof HospitalPracticeSettingCode];
