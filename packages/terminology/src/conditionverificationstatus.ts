/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 * http://terminology.hl7.org/ValueSet/condition-ver-status
 */
export const ConditionVerificationStatusCode = {
  /**
   * Unconfirmed
   */
  Unconfirmed: "unconfirmed",

  /**
   * Provisional
   */
  Provisional: "provisional",

  /**
   * Differential
   */
  Differential: "differential",

  /**
   * Confirmed
   */
  Confirmed: "confirmed",

  /**
   * Refuted
   */
  Refuted: "refuted",

  /**
   * Entered in Error
   */
  EnteredinError: "entered-in-error",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionVerificationStatusCode =
  typeof ConditionVerificationStatusCode[keyof typeof ConditionVerificationStatusCode];
