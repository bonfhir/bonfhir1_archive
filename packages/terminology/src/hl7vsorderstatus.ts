/**
 * Value Set of codes that specify the status of an order. The purpose of these values are to report the status of an order either upon request (solicited), or when the status changes (unsolicited). The values are not intended to initiate action.  It is as
 * http://terminology.hl7.org/ValueSet/v2-0038
 */
export const Hl7VSOrderStatusCode = {
  /**
   * Some, but not all, results available
   */
  Somebutnotallresultsavailable: "A",

  /**
   * Order was canceled
   */
  Orderwascanceled: "CA",

  /**
   * Order is completed
   */
  Orderiscompleted: "CM",

  /**
   * Order was discontinued
   */
  Orderwasdiscontinued: "DC",

  /**
   * Error, order not found
   */
  Errorordernotfound: "ER",

  /**
   * Order is on hold
   */
  Orderisonhold: "HD",

  /**
   * In process, unspecified
   */
  Inprocessunspecified: "IP",

  /**
   * Order has been replaced
   */
  Orderhasbeenreplaced: "RP",

  /**
   * In process, scheduled
   */
  Inprocessscheduled: "SC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrderStatusCode =
  typeof Hl7VSOrderStatusCode[keyof typeof Hl7VSOrderStatusCode];
