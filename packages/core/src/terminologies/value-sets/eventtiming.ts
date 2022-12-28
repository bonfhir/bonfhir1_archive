/**
 * Real world event relating to the schedule.
 * http://hl7.org/fhir/ValueSet/event-timing
 */
export const EventTimingCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EventTimingCode =
  typeof EventTimingCode[keyof typeof EventTimingCode];
