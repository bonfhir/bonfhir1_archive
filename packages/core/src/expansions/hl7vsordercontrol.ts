/**
 * Concepts which are used to determine the function of the order segment.  Depending on the message, the action specifies by one of these control codes may refer to an order or an individual service.
 * http://terminology.hl7.org/ValueSet/v2-0119
 */
export const Hl7VSOrderControlCode = {
  /**
   * Order/service refill request approval
   */
  AF: "AF",

  /**
   * Cancel order/service request
   */
  CA: "CA",

  /**
   * Child order/service
   */
  CH: "CH",

  /**
   * Combined result
   */
  CN: "CN",

  /**
   * Cancel process step
   */
  CP: "CP",

  /**
   * Canceled as requested
   */
  CR: "CR",

  /**
   * Discontinue order/service request
   */
  DC: "DC",

  /**
   * Data errors
   */
  DE: "DE",

  /**
   * Order/service refill request denied
   */
  DF: "DF",

  /**
   * Discontinued as requested
   */
  DR: "DR",

  /**
   * Order/service refilled, unsolicited
   */
  FU: "FU",

  /**
   * Hold order request
   */
  HD: "HD",

  /**
   * On hold as requested
   */
  HR: "HR",

  /**
   * Link order/service to patient care problem or goal
   */
  LI: "LI",

  /**
   * Miscellaneous Charge - not associated with an order
   */
  MC: "MC",

  /**
   * Number assigned
   */
  NA: "NA",

  /**
   * Notification Received
   */
  NR: "NR",

  /**
   * New order/service
   */
  NW: "NW",

  /**
   * Order/service canceled
   */
  OC: "OC",

  /**
   * Order/service discontinued
   */
  OD: "OD",

  /**
   * Order/service released
   */
  OE: "OE",

  /**
   * Order/service refilled as requested
   */
  OF: "OF",

  /**
   * Order/service held
   */
  OH: "OH",

  /**
   * Order/service accepted & OK
   */
  OK: "OK",

  /**
   * Notification of order for outside dispense
   */
  OP: "OP",

  /**
   * Released as requested
   */
  OR: "OR",

  /**
   * Parent order/service
   */
  PA: "PA",

  /**
   * Previous Results with new order/service
   */
  PR: "PR",

  /**
   * Notification of replacement order for outside dispense
   */
  PY: "PY",

  /**
   * Recommendation Accepted
   */
  RA: "RA",

  /**
   * Recommended Change
   */
  RC: "RC",

  /**
   * Recommendation Declined
   */
  RD: "RD",

  /**
   * Observations/Performed Service to follow
   */
  RE: "RE",

  /**
   * Refill order/service request
   */
  RF: "RF",

  /**
   * Release previous hold
   */
  RL: "RL",

  /**
   * Replacement order
   */
  RO: "RO",

  /**
   * Order/service replace request
   */
  RP: "RP",

  /**
   * Replaced as requested
   */
  RQ: "RQ",

  /**
   * Request received
   */
  RR: "RR",

  /**
   * Replaced unsolicited
   */
  RU: "RU",

  /**
   * Status changed
   */
  SC: "SC",

  /**
   * Send order/service number
   */
  SN: "SN",

  /**
   * Supplemented as requested
   */
  SQ: "SQ",

  /**
   * Response to send order/service status request
   */
  SR: "SR",

  /**
   * Send order/service status request
   */
  SS: "SS",

  /**
   * Supplement this order
   */
  SU: "SU",

  /**
   * Unable to accept order/service
   */
  UA: "UA",

  /**
   * Unable to cancel
   */
  UC: "UC",

  /**
   * Unable to discontinue
   */
  UD: "UD",

  /**
   * Unable to refill
   */
  UF: "UF",

  /**
   * Unable to put on hold
   */
  UH: "UH",

  /**
   * Unable to replace
   */
  UM: "UM",

  /**
   * Unlink order/service from patient care problem or goal
   */
  UN: "UN",

  /**
   * Unable to release
   */
  UR: "UR",

  /**
   * Unable to change
   */
  UX: "UX",

  /**
   * Change order/service request
   */
  XO: "XO",

  /**
   * Changed as requested
   */
  XR: "XR",

  /**
   * Order/service changed, unsol.
   */
  XX: "XX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrderControlCode =
  typeof Hl7VSOrderControlCode[keyof typeof Hl7VSOrderControlCode];
