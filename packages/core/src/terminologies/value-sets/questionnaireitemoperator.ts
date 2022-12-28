/**
 * The criteria by which a question is enabled.
 * http://hl7.org/fhir/ValueSet/questionnaire-enable-operator
 */
export const QuestionnaireItemOperatorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QuestionnaireItemOperatorCode =
  typeof QuestionnaireItemOperatorCode[keyof typeof QuestionnaireItemOperatorCode];
