/**
 *
 * http://terminology.hl7.org/ValueSet/service-category
 */
export const ServiceCategoryCode = {
  /**
   * Adoption
   */
  "1": "1",

  /**
   * Aged Care
   */
  "2": "2",

  /**
   * Allied Health
   */
  "34": "34",

  /**
   * Alternative/Complementary Therapies
   */
  "3": "3",

  /**
   * Child Care /Kindergarten
   */
  "4": "4",

  /**
   * Child Development
   */
  "5": "5",

  /**
   * Child Protection & Family Services
   */
  "6": "6",

  /**
   * Community Health Care
   */
  "7": "7",

  /**
   * Counselling
   */
  "8": "8",

  /**
   * Crisis Line (GPAH use only)
   */
  "36": "36",

  /**
   * Death Services
   */
  "9": "9",

  /**
   * Dental
   */
  "10": "10",

  /**
   * Disability Support
   */
  "11": "11",

  /**
   * Drug/Alcohol
   */
  "12": "12",

  /**
   * Education & Learning
   */
  "13": "13",

  /**
   * Emergency Department
   */
  "14": "14",

  /**
   * Employment
   */
  "15": "15",

  /**
   * Financial & Material Aid
   */
  "16": "16",

  /**
   * General Practice
   */
  "17": "17",

  /**
   * Hospital
   */
  "35": "35",

  /**
   * Housing/Homelessness
   */
  "18": "18",

  /**
   * Interpreting
   */
  "19": "19",

  /**
   * Justice
   */
  "20": "20",

  /**
   * Legal
   */
  "21": "21",

  /**
   * Mental Health
   */
  "22": "22",

  /**
   * NDIA
   */
  "38": "38",

  /**
   * Physical Activity & Recreation
   */
  "23": "23",

  /**
   * Regulation
   */
  "24": "24",

  /**
   * Respite/Carer Support
   */
  "25": "25",

  /**
   * Specialist Clinical Pathology
   */
  "26": "26",

  /**
   * Specialist Medical
   */
  "27": "27",

  /**
   * Specialist Obstetrics & Gynecology
   */
  "28": "28",

  /**
   * Specialist Paediatric
   */
  "29": "29",

  /**
   * Specialist Radiology/Imaging
   */
  "30": "30",

  /**
   * Specialist Surgical
   */
  "31": "31",

  /**
   * Support Group/s
   */
  "32": "32",

  /**
   * Test Message (HSD admin)
   */
  "37": "37",

  /**
   * Transport
   */
  "33": "33",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ServiceCategoryCode =
  typeof ServiceCategoryCode[keyof typeof ServiceCategoryCode];
