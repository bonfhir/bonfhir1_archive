/**
 * Concepts which are used to determine the function of the order segment.  Depending on the message, the action specifies by one of these control codes may refer to an order or an individual service.
 * http://terminology.hl7.org/ValueSet/v2-0119
 */
export const Hl7VSOrderControlCode = {
  /**
   * Order/service refill request approval
   */
  Orderservicerefillrequestapproval: "AF",

  /**
   * Cancel order/service request
   */
  Cancelorderservicerequest: "CA",

  /**
   * Child order/service
   */
  Childorderservice: "CH",

  /**
   * Combined result
   */
  Combinedresult: "CN",

  /**
   * Cancel process step
   */
  Cancelprocessstep: "CP",

  /**
   * Canceled as requested
   */
  Canceledasrequested: "CR",

  /**
   * Discontinue order/service request
   */
  Discontinueorderservicerequest: "DC",

  /**
   * Data errors
   */
  Dataerrors: "DE",

  /**
   * Order/service refill request denied
   */
  Orderservicerefillrequestdenied: "DF",

  /**
   * Discontinued as requested
   */
  Discontinuedasrequested: "DR",

  /**
   * Order/service refilled, unsolicited
   */
  Orderservicerefilledunsolicited: "FU",

  /**
   * Hold order request
   */
  Holdorderrequest: "HD",

  /**
   * On hold as requested
   */
  Onholdasrequested: "HR",

  /**
   * Link order/service to patient care problem or goal
   */
  Linkorderservicetopatientcareproblemorgoal: "LI",

  /**
   * Miscellaneous Charge - not associated with an order
   */
  MiscellaneousChargenotassociatedwithanorder: "MC",

  /**
   * Number assigned
   */
  Numberassigned: "NA",

  /**
   * Notification Received
   */
  NotificationReceived: "NR",

  /**
   * New order/service
   */
  Neworderservice: "NW",

  /**
   * Order/service canceled
   */
  Orderservicecanceled: "OC",

  /**
   * Order/service discontinued
   */
  Orderservicediscontinued: "OD",

  /**
   * Order/service released
   */
  Orderservicereleased: "OE",

  /**
   * Order/service refilled as requested
   */
  Orderservicerefilledasrequested: "OF",

  /**
   * Order/service held
   */
  Orderserviceheld: "OH",

  /**
   * Order/service accepted & OK
   */
  OrderserviceacceptedOK: "OK",

  /**
   * Notification of order for outside dispense
   */
  Notificationoforderforoutsidedispense: "OP",

  /**
   * Released as requested
   */
  Releasedasrequested: "OR",

  /**
   * Parent order/service
   */
  Parentorderservice: "PA",

  /**
   * Previous Results with new order/service
   */
  PreviousResultswithneworderservice: "PR",

  /**
   * Notification of replacement order for outside dispense
   */
  Notificationofreplacementorderforoutsidedispense: "PY",

  /**
   * Recommendation Accepted
   */
  RecommendationAccepted: "RA",

  /**
   * Recommended Change
   */
  RecommendedChange: "RC",

  /**
   * Recommendation Declined
   */
  RecommendationDeclined: "RD",

  /**
   * Observations/Performed Service to follow
   */
  ObservationsPerformedServicetofollow: "RE",

  /**
   * Refill order/service request
   */
  Refillorderservicerequest: "RF",

  /**
   * Release previous hold
   */
  Releaseprevioushold: "RL",

  /**
   * Replacement order
   */
  Replacementorder: "RO",

  /**
   * Order/service replace request
   */
  Orderservicereplacerequest: "RP",

  /**
   * Replaced as requested
   */
  Replacedasrequested: "RQ",

  /**
   * Request received
   */
  Requestreceived: "RR",

  /**
   * Replaced unsolicited
   */
  Replacedunsolicited: "RU",

  /**
   * Status changed
   */
  Statuschanged: "SC",

  /**
   * Send order/service number
   */
  Sendorderservicenumber: "SN",

  /**
   * Supplemented as requested
   */
  Supplementedasrequested: "SQ",

  /**
   * Response to send order/service status request
   */
  Responsetosendorderservicestatusrequest: "SR",

  /**
   * Send order/service status request
   */
  Sendorderservicestatusrequest: "SS",

  /**
   * Supplement this order
   */
  Supplementthisorder: "SU",

  /**
   * Unable to accept order/service
   */
  Unabletoacceptorderservice: "UA",

  /**
   * Unable to cancel
   */
  Unabletocancel: "UC",

  /**
   * Unable to discontinue
   */
  Unabletodiscontinue: "UD",

  /**
   * Unable to refill
   */
  Unabletorefill: "UF",

  /**
   * Unable to put on hold
   */
  Unabletoputonhold: "UH",

  /**
   * Unable to replace
   */
  Unabletoreplace: "UM",

  /**
   * Unlink order/service from patient care problem or goal
   */
  Unlinkorderservicefrompatientcareproblemorgoal: "UN",

  /**
   * Unable to release
   */
  Unabletorelease: "UR",

  /**
   * Unable to change
   */
  Unabletochange: "UX",

  /**
   * Change order/service request
   */
  Changeorderservicerequest: "XO",

  /**
   * Changed as requested
   */
  Changedasrequested: "XR",

  /**
   * Order/service changed, unsol.
   */
  Orderservicechangedunsol: "XX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrderControlCode =
  typeof Hl7VSOrderControlCode[keyof typeof Hl7VSOrderControlCode];
