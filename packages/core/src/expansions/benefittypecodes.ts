/**
 * This value set includes a smattering of Benefit type codes.
 * http://terminology.hl7.org/ValueSet/benefit-type
 */
export const BenefitTypeCodesCode = {
  /**
   * Benefit
   */
  benefit: "benefit",

  /**
   * Deductible
   */
  deductible: "deductible",

  /**
   * Visit
   */
  visit: "visit",

  /**
   * Room
   */
  room: "room",

  /**
   * Copayment per service
   */
  copay: "copay",

  /**
   * Copayment Percent per service
   */
  "copay-percent": "copay-percent",

  /**
   * Copayment maximum per service
   */
  "copay-maximum": "copay-maximum",

  /**
   * Vision Exam
   */
  "vision-exam": "vision-exam",

  /**
   * Vision Glasses
   */
  "vision-glasses": "vision-glasses",

  /**
   * Vision Contacts Coverage
   */
  "vision-contacts": "vision-contacts",

  /**
   * Medical Primary Health Coverage
   */
  "medical-primarycare": "medical-primarycare",

  /**
   * Pharmacy Dispense Coverage
   */
  "pharmacy-dispense": "pharmacy-dispense",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BenefitTypeCodesCode =
  typeof BenefitTypeCodesCode[keyof typeof BenefitTypeCodesCode];
