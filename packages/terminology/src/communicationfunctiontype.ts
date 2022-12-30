/**
 * Describes the type of communication function that the associated entity plays in the associated transmission.
 * http://terminology.hl7.org/ValueSet/v3-CommunicationFunctionType
 */
export const CommunicationFunctionTypeCode = {
  /**
   * receiver
   */
  RCV: "RCV",

  /**
   * respond to
   */
  RSP: "RSP",

  /**
   * sender
   */
  SND: "SND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommunicationFunctionTypeCode =
  typeof CommunicationFunctionTypeCode[keyof typeof CommunicationFunctionTypeCode];
