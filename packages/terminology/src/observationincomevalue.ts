/**
 * Code specifying financial indicators used to assess or establish eligibility for coverage under a policy or program; e.g., pay stub; tax or income document; asset document; living expenses.
 * http://terminology.hl7.org/ValueSet/v3-ObservationIncomeValue
 */
export const ObservationIncomeValueCode = {
  /**
   * income
   */
  income: "INCOME",

  /**
   * child support
   */
  childsupport: "CHILD",

  /**
   * disability pay
   */
  disabilitypay: "DISABL",

  /**
   * investment income
   */
  investmentincome: "INVEST",

  /**
   * paid employment
   */
  paidemployment: "PAY",

  /**
   * retirement pay
   */
  retirementpay: "RETIRE",

  /**
   * spousal or partner support
   */
  spousalorpartnersupport: "SPOUSAL",

  /**
   * income supplement
   */
  incomesupplement: "SUPPLE",

  /**
   * tax obligation
   */
  taxobligation: "TAX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationIncomeValueCode =
  typeof ObservationIncomeValueCode[keyof typeof ObservationIncomeValueCode];
