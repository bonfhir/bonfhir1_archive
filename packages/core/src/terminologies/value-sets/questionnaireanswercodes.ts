/**
 * Example list of codes for answers to questions. (Not complete or necessarily appropriate.)
 * http://hl7.org/fhir/ValueSet/questionnaire-answers
 */
export const QuestionnaireAnswerCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QuestionnaireAnswerCodesCode =
  typeof QuestionnaireAnswerCodesCode[keyof typeof QuestionnaireAnswerCodesCode];
