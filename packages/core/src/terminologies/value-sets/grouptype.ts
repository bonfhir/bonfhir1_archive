/**
 * Types of resources that are part of group.
 * http://hl7.org/fhir/ValueSet/group-type
 */
export const GroupTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GroupTypeCode = typeof GroupTypeCode[keyof typeof GroupTypeCode];
