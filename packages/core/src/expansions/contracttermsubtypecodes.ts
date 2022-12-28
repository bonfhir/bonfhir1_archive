/**
 * This value set includes sample Contract Term SubType codes.
 * http://terminology.hl7.org/ValueSet/contract-term-subtype
 */
export const ContractTermSubtypeCodesCode = {
  /**
   * Condition
   */
  condition: "condition",

  /**
   * Warranty
   */
  warranty: "warranty",

  /**
   * Innominate
   */
  innominate: "innominate",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractTermSubtypeCodesCode =
  typeof ContractTermSubtypeCodesCode[keyof typeof ContractTermSubtypeCodesCode];
