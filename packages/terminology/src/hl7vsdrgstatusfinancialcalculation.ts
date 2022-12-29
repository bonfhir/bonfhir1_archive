/**
 * Value Set of codes that specify the status of the diagnosis related group (DRG) calculation regarding the financial aspects.
 * http://terminology.hl7.org/ValueSet/v2-0742
 */
export const Hl7VSDrgStatusFinancialCalculationCode = {
  /**
   * Effective weight calculated
   */
  Effectiveweightcalculated: "00",

  /**
   * Hospital specific contract
   */
  Hospitalspecificcontract: "01",

  /**
   * Eeffective weight for transfer/referral calculated
   */
  Eeffectiveweightfortransferreferralcalculated: "03",

  /**
   * Referral from other hospital based on a cooperation (no DRG reimbursement)
   */
  ReferralfromotherhospitalbasedonacooperationnoDRGreimbursement: "04",

  /**
   * Invalid length of stay
   */
  Invalidlengthofstay: "05",

  /**
   * No information/entry in cost data for this DRG
   */
  NoinformationentryincostdataforthisDRG: "10",

  /**
   * No relative weight found for department (type)
   */
  Norelativeweightfoundfordepartmenttype: "11",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDrgStatusFinancialCalculationCode =
  typeof Hl7VSDrgStatusFinancialCalculationCode[keyof typeof Hl7VSDrgStatusFinancialCalculationCode];
