/**
 * The type of action to be performed.
 * http://terminology.hl7.org/ValueSet/action-type
 */
export const ActionTypeCode = {
  /**
   * Create
   */
  Create: "create",

  /**
   * Update
   */
  Update: "update",

  /**
   * Remove
   */
  Remove: "remove",

  /**
   * Fire Event
   */
  FireEvent: "fire-event",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionTypeCode = typeof ActionTypeCode[keyof typeof ActionTypeCode];
