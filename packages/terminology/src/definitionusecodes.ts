/**
 * Structure Definition Use Codes / Keywords
 * http://terminology.hl7.org/ValueSet/definition-use
 */
export const DefinitionUseCodesCode = {
  /**
   * FHIR Structure
   */
  "fhir-structure": "fhir-structure",

  /**
   * Custom Resource
   */
  "custom-resource": "custom-resource",

  /**
   * Domain Analysis Model
   */
  dam: "dam",

  /**
   * Wire Format
   */
  "wire-format": "wire-format",

  /**
   * Domain Analysis Model
   */
  archetype: "archetype",

  /**
   * Template
   */
  template: "template",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DefinitionUseCodesCode =
  typeof DefinitionUseCodesCode[keyof typeof DefinitionUseCodesCode];
