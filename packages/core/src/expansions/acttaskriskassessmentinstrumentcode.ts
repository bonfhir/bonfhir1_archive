/**
 * A person reviews a Risk Assessment Instrument report of a given patient.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskRiskAssessmentInstrumentCode
 */
export const ActTaskRiskAssessmentInstrumentCodeCode = {
  /**
   * risk assessment instrument task
   */
  RISKASSESS: "RISKASSESS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskRiskAssessmentInstrumentCodeCode =
  typeof ActTaskRiskAssessmentInstrumentCodeCode[keyof typeof ActTaskRiskAssessmentInstrumentCodeCode];
