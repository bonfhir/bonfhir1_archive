/**
 * This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.
 * http://hl7.org/fhir/ValueSet/contract-content-derivative
 */
export const ContractContentDerivationCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractContentDerivationCodesCode =
  typeof ContractContentDerivationCodesCode[keyof typeof ContractContentDerivationCodesCode];
