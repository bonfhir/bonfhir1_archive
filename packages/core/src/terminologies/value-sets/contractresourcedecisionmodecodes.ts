/**
 * This value set contract specific codes for decision modes.
 * http://hl7.org/fhir/ValueSet/contract-decision-mode
 */
export const ContractResourceDecisionModeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceDecisionModeCodesCode =
  typeof ContractResourceDecisionModeCodesCode[keyof typeof ContractResourceDecisionModeCodesCode];
