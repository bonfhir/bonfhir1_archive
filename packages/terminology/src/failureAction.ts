/**
 * The result if validation fails
 * http://terminology.hl7.org/ValueSet/verificationresult-failure-action
 */
export const Failure_actionCode = {
  /**
   * Fatal
   */
  Fatal: "fatal",

  /**
   * Warning
   */
  Warning: "warn",

  /**
   * Record only
   */
  Recordonly: "rec-only",

  /**
   * None
   */
  None: "none",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Failure_actionCode =
  typeof Failure_actionCode[keyof typeof Failure_actionCode];
