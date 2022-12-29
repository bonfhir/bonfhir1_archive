/**
 * Acknowledgement Condition codes describe the conditions under which accept or application level acknowledgements are required to be returned in response to the message send operation.
 * http://terminology.hl7.org/ValueSet/v3-AcknowledgementCondition
 */
export const AcknowledgementConditionCode = {
  /**
   * Always
   */
  Always: "AL",

  /**
   * Error/reject only
   */
  Errorrejectonly: "ER",

  /**
   * Never
   */
  Never: "NE",

  /**
   * Successful only
   */
  Successfulonly: "SU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementConditionCode =
  typeof AcknowledgementConditionCode[keyof typeof AcknowledgementConditionCode];
