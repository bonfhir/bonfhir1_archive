/**
 * Codes describing the purpose or content of the communication.
 * http://hl7.org/fhir/ValueSet/communication-topic
 */
export const CommunicationTopicCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommunicationTopicCode =
  typeof CommunicationTopicCode[keyof typeof CommunicationTopicCode];
