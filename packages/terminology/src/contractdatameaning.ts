/**
 * How a resource reference is interpreted when evaluating contract offers.
 * http://terminology.hl7.org/ValueSet/contract-data-meaning
 */
export const ContractDataMeaningCode = {
  /**
   * Instance
   */
  Instance: "instance",

  /**
   * Related
   */
  Related: "related",

  /**
   * Dependents
   */
  Dependents: "dependents",

  /**
   * AuthoredBy
   */
  AuthoredBy: "authoredby",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractDataMeaningCode =
  typeof ContractDataMeaningCode[keyof typeof ContractDataMeaningCode];
