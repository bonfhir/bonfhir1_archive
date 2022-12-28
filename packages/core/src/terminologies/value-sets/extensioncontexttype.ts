/**
 * How an extension context is interpreted.
 * http://hl7.org/fhir/ValueSet/extension-context-type
 */
export const ExtensionContextTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExtensionContextTypeCode =
  typeof ExtensionContextTypeCode[keyof typeof ExtensionContextTypeCode];
