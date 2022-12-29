/**
 * Describes the type of communication function that the associated entity plays in the associated transmission.
 * http://terminology.hl7.org/ValueSet/v3-CommunicationFunctionType
 */
export const CommunicationFunctionTypeCode = {
  /**
   * receiver
   */
  receiver: "RCV",

  /**
   * respond to
   */
  respondto: "RSP",

  /**
   * sender
   */
  sender: "SND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommunicationFunctionTypeCode =
  typeof CommunicationFunctionTypeCode[keyof typeof CommunicationFunctionTypeCode];
