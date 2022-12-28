/**
 * Starter set of user interface control/display mechanisms that might be used when rendering an item in a questionnaire.
 * http://hl7.org/fhir/ValueSet/questionnaire-item-control
 */
export const QuestionnaireItemUIControlCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QuestionnaireItemUIControlCodesCode =
  typeof QuestionnaireItemUIControlCodesCode[keyof typeof QuestionnaireItemUIControlCodesCode];
