/**
 * **Description:**Trigger Event ID as published in the standard.
 * http://terminology.hl7.org/ValueSet/v3-LabResultTriggerEvents
 */
export const LabResultTriggerEventsCode = {
  /**
   * Result Status
   */
  POLB_TE004000UV: "POLB_TE004000UV",

  /**
   * Result Confirm
   */
  POLB_TE004001UV: "POLB_TE004001UV",

  /**
   * Result Reject
   */
  POLB_TE004002UV: "POLB_TE004002UV",

  /**
   * Result Tracking
   */
  POLB_TE004007UV: "POLB_TE004007UV",

  /**
   * Result in Progress
   */
  POLB_TE004100UV: "POLB_TE004100UV",

  /**
   * Result Activate
   */
  POLB_TE004102UV: "POLB_TE004102UV",

  /**
   * Result Complete with Fulfillment
   */
  POLB_TE004200UV: "POLB_TE004200UV",

  /**
   * Result Corrected
   */
  POLB_TE004201UV: "POLB_TE004201UV",

  /**
   * Result Complete
   */
  POLB_TE004202UV: "POLB_TE004202UV",

  /**
   * Result Abort
   */
  POLB_TE004301UV: "POLB_TE004301UV",

  /**
   * Result Nullify
   */
  POLB_TE004500UV: "POLB_TE004500UV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LabResultTriggerEventsCode =
  typeof LabResultTriggerEventsCode[keyof typeof LabResultTriggerEventsCode];
