/**
 * An officially or unofficially instituted program to track acts of a particular type or categorization.
 * http://terminology.hl7.org/ValueSet/v3-ActClassMonitoringProgram
 */
export const ActClassMonitoringProgramCode = {
  /**
   * monitoring program
   */
  MPROT: "MPROT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassMonitoringProgramCode =
  typeof ActClassMonitoringProgramCode[keyof typeof ActClassMonitoringProgramCode];
