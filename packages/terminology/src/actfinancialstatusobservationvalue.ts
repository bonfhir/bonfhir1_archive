/**
 * Code specifying financial indicators used to assess or establish eligibility for coverage under a policy or program; e.g., pay stub; tax or income document; asset document; living expenses.
 * http://terminology.hl7.org/ValueSet/v3-ActFinancialStatusObservationValue
 */
export const ActFinancialStatusObservationValueCode = {
  /**
   * ActFinancialStatusObservationValue
   */
  ActFinancialStatusObservationValue: "_ActFinancialStatusObservationValue",

  /**
   * asset
   */
  asset: "ASSET",

  /**
   * annuity
   */
  annuity: "ANNUITY",

  /**
   * real property
   */
  realproperty: "PROP",

  /**
   * retirement investment account
   */
  retirementinvestmentaccount: "RETACCT",

  /**
   * trust
   */
  trust: "TRUST",

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

  /**
   * living expense
   */
  livingexpense: "LIVEXP",

  /**
   * clothing expense
   */
  clothingexpense: "CLOTH",

  /**
   * food expense
   */
  foodexpense: "FOOD",

  /**
   * health expense
   */
  healthexpense: "HEALTH",

  /**
   * household expense
   */
  householdexpense: "HOUSE",

  /**
   * legal expense
   */
  legalexpense: "LEGAL",

  /**
   * mortgage
   */
  mortgage: "MORTG",

  /**
   * rent
   */
  rent: "RENT",

  /**
   * sundry expense
   */
  sundryexpense: "SUNDRY",

  /**
   * transportation expense
   */
  transportationexpense: "TRANS",

  /**
   * utility expense
   */
  utilityexpense: "UTIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActFinancialStatusObservationValueCode =
  typeof ActFinancialStatusObservationValueCode[keyof typeof ActFinancialStatusObservationValueCode];
