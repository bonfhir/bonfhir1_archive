/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-HospitalUnitPracticeSetting
 */
export const HospitalUnitPracticeSettingCode = {
  /**
   * Hospital unit
   */
  HU: "HU",

  /**
   * Bone marrow transplant unit
   */
  BMTU: "BMTU",

  /**
   * Coronary care unit
   */
  CCU: "CCU",

  /**
   * Chest unit
   */
  CHEST: "CHEST",

  /**
   * Epilepsy unit
   */
  EPIL: "EPIL",

  /**
   * Emergency room
   */
  ER: "ER",

  /**
   * Emergency trauma unit
   */
  ETU: "ETU",

  /**
   * Hemodialysis unit
   */
  HD: "HD",

  /**
   * hospital laboratory
   */
  HLAB: "HLAB",

  /**
   * inpatient laboratory
   */
  INLAB: "INLAB",

  /**
   * outpatient laboratory
   */
  OUTLAB: "OUTLAB",

  /**
   * radiology unit
   */
  HRAD: "HRAD",

  /**
   * specimen collection site
   */
  HUSCS: "HUSCS",

  /**
   * Intensive care unit
   */
  ICU: "ICU",

  /**
   * Pediatric intensive care unit
   */
  PEDICU: "PEDICU",

  /**
   * Pediatric neonatal intensive care unit
   */
  PEDNICU: "PEDNICU",

  /**
   * inpatient pharmacy
   */
  INPHARM: "INPHARM",

  /**
   * medical laboratory
   */
  MBL: "MBL",

  /**
   * Neurology critical care and stroke unit
   */
  NCCS: "NCCS",

  /**
   * Neurosurgery unit
   */
  NS: "NS",

  /**
   * outpatient pharmacy
   */
  OUTPHARM: "OUTPHARM",

  /**
   * Pediatric unit
   */
  PEDU: "PEDU",

  /**
   * Psychiatric hospital unit
   */
  PHU: "PHU",

  /**
   * Rehabilitation hospital unit
   */
  RHU: "RHU",

  /**
   * Sleep disorders unit
   */
  SLEEP: "SLEEP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HospitalUnitPracticeSettingCode =
  typeof HospitalUnitPracticeSettingCode[keyof typeof HospitalUnitPracticeSettingCode];
