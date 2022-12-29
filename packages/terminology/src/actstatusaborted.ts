/**
 * The Act has been terminated prior to the originally intended completion.
 * http://terminology.hl7.org/ValueSet/v3-ActStatusAborted
 */
export const ActStatusAbortedCode = {
  /**
   * aborted
   */
  aborted: "aborted",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusAbortedCode =
  typeof ActStatusAbortedCode[keyof typeof ActStatusAbortedCode];
