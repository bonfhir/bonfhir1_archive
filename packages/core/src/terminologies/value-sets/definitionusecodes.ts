/**
 * Structure Definition Use Codes / Keywords
 * http://hl7.org/fhir/ValueSet/definition-use
 */
export const DefinitionUseCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DefinitionUseCodesCode =
  typeof DefinitionUseCodesCode[keyof typeof DefinitionUseCodesCode];
