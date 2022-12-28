/**
 * Value Set of codes that specify the status of an order. The purpose of these values are to report the status of an order either upon request (solicited), or when the status changes (unsolicited). The values are not intended to initiate action.  It is as
 * http://terminology.hl7.org/ValueSet/v2-0038
 */
export const Hl7VSOrderStatusCode = {
  /**
   * Some, but not all, results available
   */
  A: "A",

  /**
   * Order was canceled
   */
  CA: "CA",

  /**
   * Order is completed
   */
  CM: "CM",

  /**
   * Order was discontinued
   */
  DC: "DC",

  /**
   * Error, order not found
   */
  ER: "ER",

  /**
   * Order is on hold
   */
  HD: "HD",

  /**
   * In process, unspecified
   */
  IP: "IP",

  /**
   * Order has been replaced
   */
  RP: "RP",

  /**
   * In process, scheduled
   */
  SC: "SC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrderStatusCode =
  typeof Hl7VSOrderStatusCode[keyof typeof Hl7VSOrderStatusCode];
