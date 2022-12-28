/**
 * Indicates the highest importance level of the set of messages the acknowledging application has waiting on a queue for the receiving application.

*Discussion:* These messages would need to be retrieved via a query. This facilitates receiving applications that cannot receive unsolicited messages (i.e. polling). The specific code specified identifies how important the most important waiting message is (and may govern how soon the receiving application is required to poll for the message).

Priority may be used by local agreement to determine the timeframe in which the receiving application is expected to retrieve the messages from the queue.
 * http://terminology.hl7.org/ValueSet/v3-MessageWaitingPriority
 */
export const MessageWaitingPriorityCode = {
  /**
   * High
   */
  H: "H",

  /**
   * Low
   */
  L: "L",

  /**
   * Medium
   */
  M: "M",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MessageWaitingPriorityCode =
  typeof MessageWaitingPriorityCode[keyof typeof MessageWaitingPriorityCode];
