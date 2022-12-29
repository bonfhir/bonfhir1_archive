/**
 * This value set includes sample Coverage Copayment Type codes.
 * http://terminology.hl7.org/ValueSet/coverage-copay-type
 */
export const CoverageCopayTypeCodesCode = {
  /**
   * GP Office Visit
   */
  GPOfficeVisit: "gpvisit",

  /**
   * Specialist Office Visit
   */
  SpecialistOfficeVisit: "spvisit",

  /**
   * Emergency
   */
  Emergency: "emergency",

  /**
   * Inpatient Hospital
   */
  InpatientHospital: "inpthosp",

  /**
   * Tele-visit
   */
  Televisit: "televisit",

  /**
   * Urgent Care
   */
  UrgentCare: "urgentcare",

  /**
   * Copay Percentage
   */
  CopayPercentage: "copaypct",

  /**
   * Copay Amount
   */
  CopayAmount: "copay",

  /**
   * Deductible
   */
  Deductible: "deductible",

  /**
   * Maximum out of pocket
   */
  Maximumoutofpocket: "maxoutofpocket",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageCopayTypeCodesCode =
  typeof CoverageCopayTypeCodesCode[keyof typeof CoverageCopayTypeCodesCode];
