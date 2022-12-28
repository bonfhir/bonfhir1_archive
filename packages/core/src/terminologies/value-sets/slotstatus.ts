/**
 * The free/busy status of the slot.
 * http://hl7.org/fhir/ValueSet/slotstatus
 */
export const SlotStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SlotStatusCode = typeof SlotStatusCode[keyof typeof SlotStatusCode];
