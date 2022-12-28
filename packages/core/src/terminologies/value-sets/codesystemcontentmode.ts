/**
 * The extent of the content of the code system (the concepts and codes it defines) are represented in a code system resource.
 * http://hl7.org/fhir/ValueSet/codesystem-content-mode
 */
export const CodeSystemContentModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CodeSystemContentModeCode =
  typeof CodeSystemContentModeCode[keyof typeof CodeSystemContentModeCode];
