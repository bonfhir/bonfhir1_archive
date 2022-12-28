/**
 * This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.
 * http://terminology.hl7.org/ValueSet/contract-content-derivative
 */
export const ContractContentDerivationCodesCode = {
  /**
   * Content Registration
   */
  registration: "registration",

  /**
   * Content Retrieval
   */
  retrieval: "retrieval",

  /**
   * Content Statement
   */
  statement: "statement",

  /**
   * Shareable Content
   */
  shareable: "shareable",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractContentDerivationCodesCode =
  typeof ContractContentDerivationCodesCode[keyof typeof ContractContentDerivationCodesCode];
