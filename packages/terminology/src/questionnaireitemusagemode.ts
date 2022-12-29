/**
 * Identifies the modes of usage of a questionnaire that should enable a particular questionnaire item.
 * http://terminology.hl7.org/ValueSet/questionnaire-usage-mode
 */
export const QuestionnaireItemUsageModeCode = {
  /**
   * Capture & Display
   */
  CaptureDisplay: "capture-display",

  /**
   * Capture Only
   */
  CaptureOnly: "capture",

  /**
   * Display Only
   */
  DisplayOnly: "display",

  /**
   * Display when Answered
   */
  DisplaywhenAnswered: "display-non-empty",

  /**
   * Capture or, if answered, Display
   */
  CaptureorifansweredDisplay: "capture-display-non-empty",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QuestionnaireItemUsageModeCode =
  typeof QuestionnaireItemUsageModeCode[keyof typeof QuestionnaireItemUsageModeCode];
