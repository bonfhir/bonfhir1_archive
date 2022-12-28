/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 * http://terminology.hl7.org/ValueSet/condition-ver-status
 */
export const ConditionVerificationStatusCode = {
  /**
   * Unconfirmed
   */
  unconfirmed: "unconfirmed",

  /**
   * Confirmed
   */
  confirmed: "confirmed",

  /**
   * Refuted
   */
  refuted: "refuted",

  /**
   * Entered in Error
   */
  "entered-in-error": "entered-in-error",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionVerificationStatusCode =
  typeof ConditionVerificationStatusCode[keyof typeof ConditionVerificationStatusCode];
