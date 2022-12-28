/**
 * Codes describing how the QuestionnaireResponse was populated
 * http://hl7.org/fhir/ValueSet/questionnaireresponse-mode
 */
export const QuestionnaireResponseModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QuestionnaireResponseModeCode =
  typeof QuestionnaireResponseModeCode[keyof typeof QuestionnaireResponseModeCode];
