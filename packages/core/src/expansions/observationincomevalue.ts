/**
 * Code specifying financial indicators used to assess or establish eligibility for coverage under a policy or program; e.g., pay stub; tax or income document; asset document; living expenses.
 * http://terminology.hl7.org/ValueSet/v3-ObservationIncomeValue
 */
export const ObservationIncomeValueCode = {
  /**
   * income
   */
  INCOME: "INCOME",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationIncomeValueCode =
  typeof ObservationIncomeValueCode[keyof typeof ObservationIncomeValueCode];
