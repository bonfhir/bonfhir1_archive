/**
 * Some conditions may be attached to an allowable substitution. An allowable substitution is based on a match to any other attributes that may be specified.
 * http://terminology.hl7.org/ValueSet/v3-Conditional
 */
export const ConditionalCode = {
  /**
   * Confirm first
   */
  CONFIRM: "CONFIRM",

  /**
   * Notify first
   */
  NOTIFY: "NOTIFY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionalCode =
  typeof ConditionalCode[keyof typeof ConditionalCode];
