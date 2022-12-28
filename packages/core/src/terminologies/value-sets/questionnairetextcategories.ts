/**
 * Codes defining the purpose of a Questionnaire item of type 'text'.
 * http://hl7.org/fhir/ValueSet/questionnaire-display-category
 */
export const QuestionnaireTextCategoriesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QuestionnaireTextCategoriesCode =
  typeof QuestionnaireTextCategoriesCode[keyof typeof QuestionnaireTextCategoriesCode];
