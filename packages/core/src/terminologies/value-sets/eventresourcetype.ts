/**
 * A list of all the event resource types defined in this version of the FHIR specification.
 * http://hl7.org/fhir/ValueSet/event-resource-types
 */
export const EventResourceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EventResourceTypeCode =
  typeof EventResourceTypeCode[keyof typeof EventResourceTypeCode];
