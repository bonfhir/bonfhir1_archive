/**
 * Structure Definition Use Codes / Keywords
 * http://terminology.hl7.org/ValueSet/definition-use
 */
export const DefinitionUseCodesCode = {
  /**
   * FHIR Structure
   */
  FHIRStructure: "fhir-structure",

  /**
   * Custom Resource
   */
  CustomResource: "custom-resource",

  /**
   * Domain Analysis Model
   */
  DomainAnalysisModel: "dam",

  /**
   * Wire Format
   */
  WireFormat: "wire-format",

  /**
   * Domain Analysis Model
   */
  DomainAnalysisModel: "archetype",

  /**
   * Template
   */
  Template: "template",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DefinitionUseCodesCode =
  typeof DefinitionUseCodesCode[keyof typeof DefinitionUseCodesCode];
