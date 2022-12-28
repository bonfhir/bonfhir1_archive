/**
 * The impact of the content of a message.
 * http://hl7.org/fhir/ValueSet/message-significance-category
 */
export const MessageSignificanceCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MessageSignificanceCategoryCode =
  typeof MessageSignificanceCategoryCode[keyof typeof MessageSignificanceCategoryCode];
