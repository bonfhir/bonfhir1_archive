/**
 * \*\* none supplied \*\*
 * http://terminology.hl7.org/ValueSet/v3-ActStatusActiveAborted
 */
export const ActStatusActiveAbortedCode = {
  /**
   * aborted
   */
  aborted: "aborted",

  /**
   * active
   */
  active: "active",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusActiveAbortedCode =
  typeof ActStatusActiveAbortedCode[keyof typeof ActStatusActiveAbortedCode];
