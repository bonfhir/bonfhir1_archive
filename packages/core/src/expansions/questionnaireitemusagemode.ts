/**
 * Identifies the modes of usage of a questionnaire that should enable a particular questionnaire item.
 * http://terminology.hl7.org/ValueSet/questionnaire-usage-mode
 */
export const QuestionnaireItemUsageModeCode = {
  /**
   * Capture & Display
   */
  "capture-display": "capture-display",

  /**
   * Capture Only
   */
  capture: "capture",

  /**
   * Display Only
   */
  display: "display",

  /**
   * Display when Answered
   */
  "display-non-empty": "display-non-empty",

  /**
   * Capture or, if answered, Display
   */
  "capture-display-non-empty": "capture-display-non-empty",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QuestionnaireItemUsageModeCode =
  typeof QuestionnaireItemUsageModeCode[keyof typeof QuestionnaireItemUsageModeCode];
