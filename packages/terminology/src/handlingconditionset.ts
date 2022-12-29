/**
 * Set of handling instructions prior testing of the specimen.
 * http://terminology.hl7.org/ValueSet/handling-condition
 */
export const HandlingConditionSetCode = {
  /**
   * room temperature
   */
  roomtemperature: "room",

  /**
   * refrigerated
   */
  refrigerated: "refrigerated",

  /**
   * frozen
   */
  frozen: "frozen",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HandlingConditionSetCode =
  typeof HandlingConditionSetCode[keyof typeof HandlingConditionSetCode];
