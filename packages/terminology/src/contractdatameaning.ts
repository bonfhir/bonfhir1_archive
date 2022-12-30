/**
 * How a resource reference is interpreted when evaluating contract offers.
 * http://terminology.hl7.org/ValueSet/contract-data-meaning
 */
export const ContractDataMeaningCode = {
  /**
   * Instance
   */
  instance: "instance",

  /**
   * Related
   */
  related: "related",

  /**
   * Dependents
   */
  dependents: "dependents",

  /**
   * AuthoredBy
   */
  authoredby: "authoredby",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractDataMeaningCode =
  typeof ContractDataMeaningCode[keyof typeof ContractDataMeaningCode];
