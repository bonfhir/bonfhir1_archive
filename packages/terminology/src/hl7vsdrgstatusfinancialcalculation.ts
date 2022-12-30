/**
 * Value Set of codes that specify the status of the diagnosis related group (DRG) calculation regarding the financial aspects.
 * http://terminology.hl7.org/ValueSet/v2-0742
 */
export const Hl7VSDrgStatusFinancialCalculationCode = {
  /**
   * Effective weight calculated
   */
  "00": "00",

  /**
   * Hospital specific contract
   */
  "01": "01",

  /**
   * Eeffective weight for transfer/referral calculated
   */
  "03": "03",

  /**
   * Referral from other hospital based on a cooperation (no DRG reimbursement)
   */
  "04": "04",

  /**
   * Invalid length of stay
   */
  "05": "05",

  /**
   * No information/entry in cost data for this DRG
   */
  "10": "10",

  /**
   * No relative weight found for department (type)
   */
  "11": "11",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDrgStatusFinancialCalculationCode =
  typeof Hl7VSDrgStatusFinancialCalculationCode[keyof typeof Hl7VSDrgStatusFinancialCalculationCode];
