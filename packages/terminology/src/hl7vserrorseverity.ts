/**
 * Concepts documenting the severity of an application error as reported during acknowledgment of messages.
 * http://terminology.hl7.org/ValueSet/v2-0516
 */
export const Hl7VSErrorSeverityCode = {
  /**
   * Warning
   */
  Warning: "W",

  /**
   * Information
   */
  Information: "I",

  /**
   * Error
   */
  Error: "E",

  /**
   * Fatal Error
   */
  FatalError: "F",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSErrorSeverityCode =
  typeof Hl7VSErrorSeverityCode[keyof typeof Hl7VSErrorSeverityCode];
