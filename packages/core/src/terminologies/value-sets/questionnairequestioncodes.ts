/**
 * Example list of codes for questions and groups of questions. (Not necessarily complete or appropriate.)
 * http://hl7.org/fhir/ValueSet/questionnaire-questions
 */
export const QuestionnaireQuestionCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QuestionnaireQuestionCodesCode =
  typeof QuestionnaireQuestionCodesCode[keyof typeof QuestionnaireQuestionCodesCode];
