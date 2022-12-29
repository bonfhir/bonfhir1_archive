/**
 * This value set includes a smattering of Benefit type codes.
 * http://terminology.hl7.org/ValueSet/benefit-type
 */
export const BenefitTypeCodesCode = {
  /**
   * Benefit
   */
  Benefit: "benefit",

  /**
   * Deductible
   */
  Deductible: "deductible",

  /**
   * Visit
   */
  Visit: "visit",

  /**
   * Room
   */
  Room: "room",

  /**
   * Copayment per service
   */
  Copaymentperservice: "copay",

  /**
   * Copayment Percent per service
   */
  CopaymentPercentperservice: "copay-percent",

  /**
   * Copayment maximum per service
   */
  Copaymentmaximumperservice: "copay-maximum",

  /**
   * Vision Exam
   */
  VisionExam: "vision-exam",

  /**
   * Vision Glasses
   */
  VisionGlasses: "vision-glasses",

  /**
   * Vision Contacts Coverage
   */
  VisionContactsCoverage: "vision-contacts",

  /**
   * Medical Primary Health Coverage
   */
  MedicalPrimaryHealthCoverage: "medical-primarycare",

  /**
   * Pharmacy Dispense Coverage
   */
  PharmacyDispenseCoverage: "pharmacy-dispense",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BenefitTypeCodesCode =
  typeof BenefitTypeCodesCode[keyof typeof BenefitTypeCodesCode];
