/**
 * The degree to which the server supports the code search parameter on ValueSet, if it is supported.
 * http://hl7.org/fhir/ValueSet/code-search-support
 */
export const CodeSearchSupportCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CodeSearchSupportCode =
  typeof CodeSearchSupportCode[keyof typeof CodeSearchSupportCode];
