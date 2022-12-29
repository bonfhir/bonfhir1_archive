/**
 * Acknowledgement code as described in HL7 message processing rules.
 * http://terminology.hl7.org/ValueSet/v3-AcknowledgementType
 */
export const AcknowledgementTypeCode = {
  /**
   * Application Acknowledgement Accept
   */
  ApplicationAcknowledgementAccept: "AA",

  /**
   * Application Acknowledgement Error
   */
  ApplicationAcknowledgementError: "AE",

  /**
   * Application Acknowledgement Reject
   */
  ApplicationAcknowledgementReject: "AR",

  /**
   * Accept Acknowledgement Commit Accept
   */
  AcceptAcknowledgementCommitAccept: "CA",

  /**
   * Accept Acknowledgement Commit Error
   */
  AcceptAcknowledgementCommitError: "CE",

  /**
   * Accept Acknowledgement Commit Reject
   */
  AcceptAcknowledgementCommitReject: "CR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementTypeCode =
  typeof AcknowledgementTypeCode[keyof typeof AcknowledgementTypeCode];
