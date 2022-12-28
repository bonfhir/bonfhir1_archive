/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 * http://hl7.org/fhir/ValueSet/communication-category
 */
export const CommunicationCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommunicationCategoryCode =
  typeof CommunicationCategoryCode[keyof typeof CommunicationCategoryCode];
