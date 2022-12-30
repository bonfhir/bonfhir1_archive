/**
 * Code specifying financial indicators used to assess or establish eligibility for coverage under a policy or program; e.g., pay stub; tax or income document; asset document; living expenses.
 * http://terminology.hl7.org/ValueSet/v3-ObservationIncomeValue
 */
export const ObservationIncomeValueCode = {
  /**
   * income
   */
  INCOME: "INCOME",

  /**
   * child support
   */
  CHILD: "CHILD",

  /**
   * disability pay
   */
  DISABL: "DISABL",

  /**
   * investment income
   */
  INVEST: "INVEST",

  /**
   * paid employment
   */
  PAY: "PAY",

  /**
   * retirement pay
   */
  RETIRE: "RETIRE",

  /**
   * spousal or partner support
   */
  SPOUSAL: "SPOUSAL",

  /**
   * income supplement
   */
  SUPPLE: "SUPPLE",

  /**
   * tax obligation
   */
  TAX: "TAX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationIncomeValueCode =
  typeof ObservationIncomeValueCode[keyof typeof ObservationIncomeValueCode];
