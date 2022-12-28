/**
 * One of the message events defined as part of this version of FHIR.
 * http://hl7.org/fhir/ValueSet/message-events
 */
export const MessageEventCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MessageEventCode =
  typeof MessageEventCode[keyof typeof MessageEventCode];
