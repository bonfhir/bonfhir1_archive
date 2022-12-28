/**
 * This value set includes sample Coverage Copayment Type codes.
 * http://terminology.hl7.org/ValueSet/coverage-copay-type
 */
export const CoverageCopayTypeCodesCode = {
  /**
   * GP Office Visit
   */
  gpvisit: "gpvisit",

  /**
   * Specialist Office Visit
   */
  spvisit: "spvisit",

  /**
   * Emergency
   */
  emergency: "emergency",

  /**
   * Inpatient Hospital
   */
  inpthosp: "inpthosp",

  /**
   * Tele-visit
   */
  televisit: "televisit",

  /**
   * Urgent Care
   */
  urgentcare: "urgentcare",

  /**
   * Copay Percentage
   */
  copaypct: "copaypct",

  /**
   * Copay Amount
   */
  copay: "copay",

  /**
   * Deductible
   */
  deductible: "deductible",

  /**
   * Maximum out of pocket
   */
  maxoutofpocket: "maxoutofpocket",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageCopayTypeCodesCode =
  typeof CoverageCopayTypeCodesCode[keyof typeof CoverageCopayTypeCodesCode];
