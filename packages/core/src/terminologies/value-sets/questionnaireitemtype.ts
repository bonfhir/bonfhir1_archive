/**
 * Distinguishes groups from questions and display text and indicates data type for questions.
 * http://hl7.org/fhir/ValueSet/item-type
 */
export const QuestionnaireItemTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QuestionnaireItemTypeCode =
  typeof QuestionnaireItemTypeCode[keyof typeof QuestionnaireItemTypeCode];
