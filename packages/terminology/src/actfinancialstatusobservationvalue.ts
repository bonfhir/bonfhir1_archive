/**
 * Code specifying financial indicators used to assess or establish eligibility for coverage under a policy or program; e.g., pay stub; tax or income document; asset document; living expenses.
 * http://terminology.hl7.org/ValueSet/v3-ActFinancialStatusObservationValue
 */
export const ActFinancialStatusObservationValueCode = {
  /**
   * ActFinancialStatusObservationValue
   */
  _ActFinancialStatusObservationValue: "_ActFinancialStatusObservationValue",

  /**
   * asset
   */
  ASSET: "ASSET",

  /**
   * annuity
   */
  ANNUITY: "ANNUITY",

  /**
   * real property
   */
  PROP: "PROP",

  /**
   * retirement investment account
   */
  RETACCT: "RETACCT",

  /**
   * trust
   */
  TRUST: "TRUST",

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

  /**
   * living expense
   */
  LIVEXP: "LIVEXP",

  /**
   * clothing expense
   */
  CLOTH: "CLOTH",

  /**
   * food expense
   */
  FOOD: "FOOD",

  /**
   * health expense
   */
  HEALTH: "HEALTH",

  /**
   * household expense
   */
  HOUSE: "HOUSE",

  /**
   * legal expense
   */
  LEGAL: "LEGAL",

  /**
   * mortgage
   */
  MORTG: "MORTG",

  /**
   * rent
   */
  RENT: "RENT",

  /**
   * sundry expense
   */
  SUNDRY: "SUNDRY",

  /**
   * transportation expense
   */
  TRANS: "TRANS",

  /**
   * utility expense
   */
  UTIL: "UTIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActFinancialStatusObservationValueCode =
  typeof ActFinancialStatusObservationValueCode[keyof typeof ActFinancialStatusObservationValueCode];
