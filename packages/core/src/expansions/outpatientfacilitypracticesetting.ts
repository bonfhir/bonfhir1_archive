/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OutpatientFacilityPracticeSetting
 */
export const OutpatientFacilityPracticeSettingCode = {
  /**
   * Outpatient facility
   */
  OF: "OF",

  /**
   * Allergy clinic
   */
  ALL: "ALL",

  /**
   * Amputee clinic
   */
  AMPUT: "AMPUT",

  /**
   * Bone marrow transplant clinic
   */
  BMTC: "BMTC",

  /**
   * Breast clinic
   */
  BREAST: "BREAST",

  /**
   * Child and adolescent neurology clinic
   */
  CANC: "CANC",

  /**
   * Child and adolescent psychiatry clinic
   */
  CAPC: "CAPC",

  /**
   * Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities
   */
  CARD: "CARD",

  /**
   * Pediatric cardiology clinic
   */
  PEDCARD: "PEDCARD",

  /**
   * Coagulation clinic
   */
  COAG: "COAG",

  /**
   * Colon and rectal surgery clinic
   */
  CRS: "CRS",

  /**
   * Dermatology clinic
   */
  DERM: "DERM",

  /**
   * Endocrinology clinic
   */
  ENDO: "ENDO",

  /**
   * Pediatric endocrinology clinic
   */
  PEDE: "PEDE",

  /**
   * Otorhinolaryngology clinic
   */
  ENT: "ENT",

  /**
   * Family medicine clinic
   */
  FMC: "FMC",

  /**
   * Gastroenterology clinic
   */
  GI: "GI",

  /**
   * Pediatric gastroenterology clinic
   */
  PEDGI: "PEDGI",

  /**
   * General internal medicine clinic
   */
  GIM: "GIM",

  /**
   * Gynecology clinic
   */
  GYN: "GYN",

  /**
   * Hematology clinic
   */
  HEM: "HEM",

  /**
   * Pediatric hematology clinic
   */
  PEDHEM: "PEDHEM",

  /**
   * Hypertension clinic
   */
  HTN: "HTN",

  /**
   * Impairment evaluation center
   */
  IEC: "IEC",

  /**
   * Infectious disease clinic
   */
  INFD: "INFD",

  /**
   * Pediatric infectious disease clinic
   */
  PEDID: "PEDID",

  /**
   * Infertility clinic
   */
  INV: "INV",

  /**
   * Lympedema clinic
   */
  LYMPH: "LYMPH",

  /**
   * Medical genetics clinic
   */
  MGEN: "MGEN",

  /**
   * Nephrology clinic
   */
  NEPH: "NEPH",

  /**
   * Pediatric nephrology clinic
   */
  PEDNEPH: "PEDNEPH",

  /**
   * Neurology clinic
   */
  NEUR: "NEUR",

  /**
   * Obstetrics clinic
   */
  OB: "OB",

  /**
   * Oral and maxillofacial surgery clinic
   */
  OMS: "OMS",

  /**
   * Medical oncology clinic
   */
  ONCL: "ONCL",

  /**
   * Pediatric oncology clinic
   */
  PEDHO: "PEDHO",

  /**
   * Opthalmology clinic
   */
  OPH: "OPH",

  /**
   * optometry clinic
   */
  OPTC: "OPTC",

  /**
   * Orthopedics clinic
   */
  ORTHO: "ORTHO",

  /**
   * Hand clinic
   */
  HAND: "HAND",

  /**
   * Pain clinic
   */
  PAINCL: "PAINCL",

  /**
   * Primary care clinic
   */
  PC: "PC",

  /**
   * Pediatrics clinic
   */
  PEDC: "PEDC",

  /**
   * Pediatric rheumatology clinic
   */
  PEDRHEUM: "PEDRHEUM",

  /**
   * Podiatry clinic
   */
  POD: "POD",

  /**
   * Preventive medicine clinic
   */
  PREV: "PREV",

  /**
   * Proctology clinic
   */
  PROCTO: "PROCTO",

  /**
   * Provider's Office
   */
  PROFF: "PROFF",

  /**
   * Prosthodontics clinic
   */
  PROS: "PROS",

  /**
   * Psychology clinic
   */
  PSI: "PSI",

  /**
   * Psychiatry clinic
   */
  PSY: "PSY",

  /**
   * Rheumatology clinic
   */
  RHEUM: "RHEUM",

  /**
   * Sports medicine clinic
   */
  SPMED: "SPMED",

  /**
   * Surgery clinic
   */
  SU: "SU",

  /**
   * Plastic surgery clinic
   */
  PLS: "PLS",

  /**
   * Urology clinic
   */
  URO: "URO",

  /**
   * Transplant clinic
   */
  TR: "TR",

  /**
   * Travel and geographic medicine clinic
   */
  TRAVEL: "TRAVEL",

  /**
   * Wound clinic
   */
  WND: "WND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OutpatientFacilityPracticeSettingCode =
  typeof OutpatientFacilityPracticeSettingCode[keyof typeof OutpatientFacilityPracticeSettingCode];
