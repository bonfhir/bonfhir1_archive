/**
 * The type of action to be performed.
 * http://terminology.hl7.org/ValueSet/action-type
 */
export const ActionTypeCode = {
  /**
   * Create
   */
  create: "create",

  /**
   * Update
   */
  update: "update",

  /**
   * Remove
   */
  remove: "remove",

  /**
   * Fire Event
   */
  "fire-event": "fire-event",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionTypeCode = typeof ActionTypeCode[keyof typeof ActionTypeCode];
