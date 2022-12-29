/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ParticipationAnalyte
 */
export const ParticipationAnalyteCode = {
  /**
   * analyte
   */
  analyte: "ALY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationAnalyteCode =
  typeof ParticipationAnalyteCode[keyof typeof ParticipationAnalyteCode];
