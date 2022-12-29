/**
 *
 * http://terminology.hl7.org/ValueSet/service-category
 */
export const ServiceCategoryCode = {
  /**
   * Adoption
   */
  Adoption: "1",

  /**
   * Aged Care
   */
  AgedCare: "2",

  /**
   * Allied Health
   */
  AlliedHealth: "34",

  /**
   * Alternative/Complementary Therapies
   */
  AlternativeComplementaryTherapies: "3",

  /**
   * Child Care /Kindergarten
   */
  ChildCareKindergarten: "4",

  /**
   * Child Development
   */
  ChildDevelopment: "5",

  /**
   * Child Protection & Family Services
   */
  ChildProtectionFamilyServices: "6",

  /**
   * Community Health Care
   */
  CommunityHealthCare: "7",

  /**
   * Counselling
   */
  Counselling: "8",

  /**
   * Crisis Line (GPAH use only)
   */
  CrisisLineGPAHuseonly: "36",

  /**
   * Death Services
   */
  DeathServices: "9",

  /**
   * Dental
   */
  Dental: "10",

  /**
   * Disability Support
   */
  DisabilitySupport: "11",

  /**
   * Drug/Alcohol
   */
  DrugAlcohol: "12",

  /**
   * Education & Learning
   */
  EducationLearning: "13",

  /**
   * Emergency Department
   */
  EmergencyDepartment: "14",

  /**
   * Employment
   */
  Employment: "15",

  /**
   * Financial & Material Aid
   */
  FinancialMaterialAid: "16",

  /**
   * General Practice
   */
  GeneralPractice: "17",

  /**
   * Hospital
   */
  Hospital: "35",

  /**
   * Housing/Homelessness
   */
  HousingHomelessness: "18",

  /**
   * Interpreting
   */
  Interpreting: "19",

  /**
   * Justice
   */
  Justice: "20",

  /**
   * Legal
   */
  Legal: "21",

  /**
   * Mental Health
   */
  MentalHealth: "22",

  /**
   * NDIA
   */
  NDIA: "38",

  /**
   * Physical Activity & Recreation
   */
  PhysicalActivityRecreation: "23",

  /**
   * Regulation
   */
  Regulation: "24",

  /**
   * Respite/Carer Support
   */
  RespiteCarerSupport: "25",

  /**
   * Specialist Clinical Pathology
   */
  SpecialistClinicalPathology: "26",

  /**
   * Specialist Medical
   */
  SpecialistMedical: "27",

  /**
   * Specialist Obstetrics & Gynecology
   */
  SpecialistObstetricsGynecology: "28",

  /**
   * Specialist Paediatric
   */
  SpecialistPaediatric: "29",

  /**
   * Specialist Radiology/Imaging
   */
  SpecialistRadiologyImaging: "30",

  /**
   * Specialist Surgical
   */
  SpecialistSurgical: "31",

  /**
   * Support Group/s
   */
  SupportGroups: "32",

  /**
   * Test Message (HSD admin)
   */
  TestMessageHSDadmin: "37",

  /**
   * Transport
   */
  Transport: "33",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ServiceCategoryCode =
  typeof ServiceCategoryCode[keyof typeof ServiceCategoryCode];
