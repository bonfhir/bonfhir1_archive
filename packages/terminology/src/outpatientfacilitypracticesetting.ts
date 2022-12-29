/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OutpatientFacilityPracticeSetting
 */
export const OutpatientFacilityPracticeSettingCode = {
  /**
   * Outpatient facility
   */
  Outpatientfacility: "OF",

  /**
   * Allergy clinic
   */
  Allergyclinic: "ALL",

  /**
   * Amputee clinic
   */
  Amputeeclinic: "AMPUT",

  /**
   * Bone marrow transplant clinic
   */
  Bonemarrowtransplantclinic: "BMTC",

  /**
   * Breast clinic
   */
  Breastclinic: "BREAST",

  /**
   * Child and adolescent neurology clinic
   */
  Childandadolescentneurologyclinic: "CANC",

  /**
   * Child and adolescent psychiatry clinic
   */
  Childandadolescentpsychiatryclinic: "CAPC",

  /**
   * Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities
   */
  AmbulatoryHealthCareFacilitiesClinicCenterRehabilitationCardiacFacilities:
    "CARD",

  /**
   * Pediatric cardiology clinic
   */
  Pediatriccardiologyclinic: "PEDCARD",

  /**
   * Coagulation clinic
   */
  Coagulationclinic: "COAG",

  /**
   * Colon and rectal surgery clinic
   */
  Colonandrectalsurgeryclinic: "CRS",

  /**
   * Dermatology clinic
   */
  Dermatologyclinic: "DERM",

  /**
   * Endocrinology clinic
   */
  Endocrinologyclinic: "ENDO",

  /**
   * Pediatric endocrinology clinic
   */
  Pediatricendocrinologyclinic: "PEDE",

  /**
   * Otorhinolaryngology clinic
   */
  Otorhinolaryngologyclinic: "ENT",

  /**
   * Family medicine clinic
   */
  Familymedicineclinic: "FMC",

  /**
   * Gastroenterology clinic
   */
  Gastroenterologyclinic: "GI",

  /**
   * Pediatric gastroenterology clinic
   */
  Pediatricgastroenterologyclinic: "PEDGI",

  /**
   * General internal medicine clinic
   */
  Generalinternalmedicineclinic: "GIM",

  /**
   * Gynecology clinic
   */
  Gynecologyclinic: "GYN",

  /**
   * Hematology clinic
   */
  Hematologyclinic: "HEM",

  /**
   * Pediatric hematology clinic
   */
  Pediatrichematologyclinic: "PEDHEM",

  /**
   * Hypertension clinic
   */
  Hypertensionclinic: "HTN",

  /**
   * Impairment evaluation center
   */
  Impairmentevaluationcenter: "IEC",

  /**
   * Infectious disease clinic
   */
  Infectiousdiseaseclinic: "INFD",

  /**
   * Pediatric infectious disease clinic
   */
  Pediatricinfectiousdiseaseclinic: "PEDID",

  /**
   * Infertility clinic
   */
  Infertilityclinic: "INV",

  /**
   * Lympedema clinic
   */
  Lympedemaclinic: "LYMPH",

  /**
   * Medical genetics clinic
   */
  Medicalgeneticsclinic: "MGEN",

  /**
   * Nephrology clinic
   */
  Nephrologyclinic: "NEPH",

  /**
   * Pediatric nephrology clinic
   */
  Pediatricnephrologyclinic: "PEDNEPH",

  /**
   * Neurology clinic
   */
  Neurologyclinic: "NEUR",

  /**
   * Obstetrics clinic
   */
  Obstetricsclinic: "OB",

  /**
   * Oral and maxillofacial surgery clinic
   */
  Oralandmaxillofacialsurgeryclinic: "OMS",

  /**
   * Medical oncology clinic
   */
  Medicaloncologyclinic: "ONCL",

  /**
   * Pediatric oncology clinic
   */
  Pediatriconcologyclinic: "PEDHO",

  /**
   * Opthalmology clinic
   */
  Opthalmologyclinic: "OPH",

  /**
   * optometry clinic
   */
  optometryclinic: "OPTC",

  /**
   * Orthopedics clinic
   */
  Orthopedicsclinic: "ORTHO",

  /**
   * Hand clinic
   */
  Handclinic: "HAND",

  /**
   * Pain clinic
   */
  Painclinic: "PAINCL",

  /**
   * Primary care clinic
   */
  Primarycareclinic: "PC",

  /**
   * Pediatrics clinic
   */
  Pediatricsclinic: "PEDC",

  /**
   * Pediatric rheumatology clinic
   */
  Pediatricrheumatologyclinic: "PEDRHEUM",

  /**
   * Podiatry clinic
   */
  Podiatryclinic: "POD",

  /**
   * Preventive medicine clinic
   */
  Preventivemedicineclinic: "PREV",

  /**
   * Proctology clinic
   */
  Proctologyclinic: "PROCTO",

  /**
   * Provider's Office
   */
  ProvidersOffice: "PROFF",

  /**
   * Prosthodontics clinic
   */
  Prosthodonticsclinic: "PROS",

  /**
   * Psychology clinic
   */
  Psychologyclinic: "PSI",

  /**
   * Psychiatry clinic
   */
  Psychiatryclinic: "PSY",

  /**
   * Rheumatology clinic
   */
  Rheumatologyclinic: "RHEUM",

  /**
   * Sports medicine clinic
   */
  Sportsmedicineclinic: "SPMED",

  /**
   * Surgery clinic
   */
  Surgeryclinic: "SU",

  /**
   * Plastic surgery clinic
   */
  Plasticsurgeryclinic: "PLS",

  /**
   * Urology clinic
   */
  Urologyclinic: "URO",

  /**
   * Transplant clinic
   */
  Transplantclinic: "TR",

  /**
   * Travel and geographic medicine clinic
   */
  Travelandgeographicmedicineclinic: "TRAVEL",

  /**
   * Wound clinic
   */
  Woundclinic: "WND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OutpatientFacilityPracticeSettingCode =
  typeof OutpatientFacilityPracticeSettingCode[keyof typeof OutpatientFacilityPracticeSettingCode];
