/**
 * The mode of a message capability statement.
 * http://hl7.org/fhir/ValueSet/event-capability-mode
 */
export const EventCapabilityModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EventCapabilityModeCode =
  typeof EventCapabilityModeCode[keyof typeof EventCapabilityModeCode];
