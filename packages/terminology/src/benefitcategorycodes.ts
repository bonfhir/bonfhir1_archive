/**
 * This value set includes examples of Benefit Category codes.
 * http://terminology.hl7.org/ValueSet/ex-benefitcategory
 */
export const BenefitCategoryCodesCode = {
  /**
   * Medical Care
   */
  "1": "1",

  /**
   * Surgical
   */
  "2": "2",

  /**
   * Consultation
   */
  "3": "3",

  /**
   * Diagnostic XRay
   */
  "4": "4",

  /**
   * Diagnostic Lab
   */
  "5": "5",

  /**
   * Renal Supplies
   */
  "14": "14",

  /**
   * Diagnostic Dental
   */
  "23": "23",

  /**
   * Periodontics
   */
  "24": "24",

  /**
   * Restorative
   */
  "25": "25",

  /**
   * Endodontics
   */
  "26": "26",

  /**
   * Maxillofacial Prosthetics
   */
  "27": "27",

  /**
   * Adjunctive Dental Services
   */
  "28": "28",

  /**
   * Health Benefit Plan Coverage
   */
  "30": "30",

  /**
   * Dental Care
   */
  "35": "35",

  /**
   * Dental Crowns
   */
  "36": "36",

  /**
   * Dental Accident
   */
  "37": "37",

  /**
   * Hospital Room and Board
   */
  "49": "49",

  /**
   * Major Medical
   */
  "55": "55",

  /**
   * Medically Related Transportation
   */
  "56": "56",

  /**
   * In-vitro Fertilization
   */
  "61": "61",

  /**
   * MRI Scan
   */
  "62": "62",

  /**
   * Donor Procedures
   */
  "63": "63",

  /**
   * Maternity
   */
  "69": "69",

  /**
   * Renal Dialysis
   */
  "76": "76",

  /**
   * Medical Coverage
   */
  F1: "F1",

  /**
   * Dental Coverage
   */
  F3: "F3",

  /**
   * Hearing Coverage
   */
  F4: "F4",

  /**
   * Vision Coverage
   */
  F6: "F6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BenefitCategoryCodesCode =
  typeof BenefitCategoryCodesCode[keyof typeof BenefitCategoryCodesCode];
