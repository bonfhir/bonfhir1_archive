/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TriggerEventID
 */
export const TriggerEventIDCode = {
  /**
   * Result Status
   */
  ResultStatus: "POLB_TE004000UV",

  /**
   * Result Confirm
   */
  ResultConfirm: "POLB_TE004001UV",

  /**
   * Result Reject
   */
  ResultReject: "POLB_TE004002UV",

  /**
   * Result Tracking
   */
  ResultTracking: "POLB_TE004007UV",

  /**
   * Result in Progress
   */
  ResultinProgress: "POLB_TE004100UV",

  /**
   * Result Activate
   */
  ResultActivate: "POLB_TE004102UV",

  /**
   * Result Complete with Fulfillment
   */
  ResultCompletewithFulfillment: "POLB_TE004200UV",

  /**
   * Result Corrected
   */
  ResultCorrected: "POLB_TE004201UV",

  /**
   * Result Complete
   */
  ResultComplete: "POLB_TE004202UV",

  /**
   * Result Abort
   */
  ResultAbort: "POLB_TE004301UV",

  /**
   * Result Nullify
   */
  ResultNullify: "POLB_TE004500UV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TriggerEventIDCode =
  typeof TriggerEventIDCode[keyof typeof TriggerEventIDCode];
