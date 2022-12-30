/**
 * Acknowledgement code as described in HL7 message processing rules.
 * http://terminology.hl7.org/ValueSet/v3-AcknowledgementType
 */
export const AcknowledgementTypeCode = {
  /**
   * Application Acknowledgement Accept
   */
  AA: "AA",

  /**
   * Application Acknowledgement Error
   */
  AE: "AE",

  /**
   * Application Acknowledgement Reject
   */
  AR: "AR",

  /**
   * Accept Acknowledgement Commit Accept
   */
  CA: "CA",

  /**
   * Accept Acknowledgement Commit Error
   */
  CE: "CE",

  /**
   * Accept Acknowledgement Commit Reject
   */
  CR: "CR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementTypeCode =
  typeof AcknowledgementTypeCode[keyof typeof AcknowledgementTypeCode];
