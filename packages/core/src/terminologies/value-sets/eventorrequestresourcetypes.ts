/**
 * This value set lists all the event or request resource types defined in this version of the specification.
 * http://hl7.org/fhir/ValueSet/event-or-request-resource-types
 */
export const EventOrRequestResourceTypesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EventOrRequestResourceTypesCode =
  typeof EventOrRequestResourceTypesCode[keyof typeof EventOrRequestResourceTypesCode];
