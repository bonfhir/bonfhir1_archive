/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-HospitalUnitPracticeSetting
 */
export const HospitalUnitPracticeSettingCode = {
  /**
   * Hospital unit
   */
  Hospitalunit: "HU",

  /**
   * Bone marrow transplant unit
   */
  Bonemarrowtransplantunit: "BMTU",

  /**
   * Coronary care unit
   */
  Coronarycareunit: "CCU",

  /**
   * Chest unit
   */
  Chestunit: "CHEST",

  /**
   * Epilepsy unit
   */
  Epilepsyunit: "EPIL",

  /**
   * Emergency room
   */
  Emergencyroom: "ER",

  /**
   * Emergency trauma unit
   */
  Emergencytraumaunit: "ETU",

  /**
   * Hemodialysis unit
   */
  Hemodialysisunit: "HD",

  /**
   * hospital laboratory
   */
  hospitallaboratory: "HLAB",

  /**
   * inpatient laboratory
   */
  inpatientlaboratory: "INLAB",

  /**
   * outpatient laboratory
   */
  outpatientlaboratory: "OUTLAB",

  /**
   * radiology unit
   */
  radiologyunit: "HRAD",

  /**
   * specimen collection site
   */
  specimencollectionsite: "HUSCS",

  /**
   * Intensive care unit
   */
  Intensivecareunit: "ICU",

  /**
   * Pediatric intensive care unit
   */
  Pediatricintensivecareunit: "PEDICU",

  /**
   * Pediatric neonatal intensive care unit
   */
  Pediatricneonatalintensivecareunit: "PEDNICU",

  /**
   * inpatient pharmacy
   */
  inpatientpharmacy: "INPHARM",

  /**
   * medical laboratory
   */
  medicallaboratory: "MBL",

  /**
   * Neurology critical care and stroke unit
   */
  Neurologycriticalcareandstrokeunit: "NCCS",

  /**
   * Neurosurgery unit
   */
  Neurosurgeryunit: "NS",

  /**
   * outpatient pharmacy
   */
  outpatientpharmacy: "OUTPHARM",

  /**
   * Pediatric unit
   */
  Pediatricunit: "PEDU",

  /**
   * Psychiatric hospital unit
   */
  Psychiatrichospitalunit: "PHU",

  /**
   * Rehabilitation hospital unit
   */
  Rehabilitationhospitalunit: "RHU",

  /**
   * Sleep disorders unit
   */
  Sleepdisordersunit: "SLEEP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HospitalUnitPracticeSettingCode =
  typeof HospitalUnitPracticeSettingCode[keyof typeof HospitalUnitPracticeSettingCode];
