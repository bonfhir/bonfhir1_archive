/**
 * The protocol used for message transport.
 * http://hl7.org/fhir/ValueSet/message-transport
 */
export const MessageTransportCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MessageTransportCode =
  typeof MessageTransportCode[keyof typeof MessageTransportCode];
