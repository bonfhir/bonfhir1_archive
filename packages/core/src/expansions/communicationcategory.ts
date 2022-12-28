/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 * http://terminology.hl7.org/ValueSet/communication-category
 */
export const CommunicationCategoryCode = {
  /**
   * Alert
   */
  alert: "alert",

  /**
   * Notification
   */
  notification: "notification",

  /**
   * Reminder
   */
  reminder: "reminder",

  /**
   * Instruction
   */
  instruction: "instruction",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommunicationCategoryCode =
  typeof CommunicationCategoryCode[keyof typeof CommunicationCategoryCode];
