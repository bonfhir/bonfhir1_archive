/**
 * Acknowledgement Condition codes describe the conditions under which accept or application level acknowledgements are required to be returned in response to the message send operation.
 * http://terminology.hl7.org/ValueSet/v3-AcknowledgementCondition
 */
export const AcknowledgementConditionCode = {
  /**
   * Always
   */
  AL: "AL",

  /**
   * Error/reject only
   */
  ER: "ER",

  /**
   * Never
   */
  NE: "NE",

  /**
   * Successful only
   */
  SU: "SU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementConditionCode =
  typeof AcknowledgementConditionCode[keyof typeof AcknowledgementConditionCode];
