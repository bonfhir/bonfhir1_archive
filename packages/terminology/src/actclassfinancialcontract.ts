/**
 * A contract whose value is measured in monetary terms.
 * http://terminology.hl7.org/ValueSet/v3-ActClassFinancialContract
 */
export const ActClassFinancialContractCode = {
  /**
   * financial contract
   */
  financialcontract: "FCNTRCT",

  /**
   * coverage
   */
  coverage: "COV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassFinancialContractCode =
  typeof ActClassFinancialContractCode[keyof typeof ActClassFinancialContractCode];
