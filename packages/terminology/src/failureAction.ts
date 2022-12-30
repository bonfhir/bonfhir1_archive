/**
 * The result if validation fails
 * http://terminology.hl7.org/ValueSet/verificationresult-failure-action
 */
export const Failure_actionCode = {
  /**
   * Fatal
   */
  fatal: "fatal",

  /**
   * Warning
   */
  warn: "warn",

  /**
   * Record only
   */
  "rec-only": "rec-only",

  /**
   * None
   */
  none: "none",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Failure_actionCode =
  typeof Failure_actionCode[keyof typeof Failure_actionCode];
