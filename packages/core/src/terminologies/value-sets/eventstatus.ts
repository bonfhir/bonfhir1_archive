/**
 * Codes identifying the lifecycle stage of an event.
 * http://hl7.org/fhir/ValueSet/event-status
 */
export const EventStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EventStatusCode =
  typeof EventStatusCode[keyof typeof EventStatusCode];
