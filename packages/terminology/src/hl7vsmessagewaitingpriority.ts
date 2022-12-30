/**
 * Value Set of codes that specify how important the most important waiting mesasge is.  For example, if there are 3 low priority messages, 1 medium priority message and 1 high priority message, the message waiting priority would be "high", because
 * http://terminology.hl7.org/ValueSet/v2-0520
 */
export const Hl7VSMessageWaitingPriorityCode = {
  /**
   * High
   */
  H: "H",

  /**
   * Medium
   */
  M: "M",

  /**
   * Low
   */
  L: "L",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMessageWaitingPriorityCode =
  typeof Hl7VSMessageWaitingPriorityCode[keyof typeof Hl7VSMessageWaitingPriorityCode];
