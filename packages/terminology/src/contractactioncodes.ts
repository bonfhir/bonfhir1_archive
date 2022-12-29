/**
 * This value set includes sample Contract Action codes.
 * http://terminology.hl7.org/ValueSet/contract-action
 */
export const ContractActionCodesCode = {
  /**
   * Action A
   */
  ActionA: "action-a",

  /**
   * Action B
   */
  ActionB: "action-b",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractActionCodesCode =
  typeof ContractActionCodesCode[keyof typeof ContractActionCodesCode];
