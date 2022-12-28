/**
 * A type of management for an interaction of a medication or other substance.
 * http://hl7.org/fhir/ValueSet/interaction-management
 */
export const InteractionManagementCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InteractionManagementCode =
  typeof InteractionManagementCode[keyof typeof InteractionManagementCode];
