/**
 * Lifecycle status of the questionnaire response.
 * http://hl7.org/fhir/ValueSet/questionnaire-answers-status
 */
export const QuestionnaireResponseStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QuestionnaireResponseStatusCode =
  typeof QuestionnaireResponseStatusCode[keyof typeof QuestionnaireResponseStatusCode];
