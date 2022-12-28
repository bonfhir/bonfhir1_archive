/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceHawaiianOrPacificIsland
 */
export const RaceHawaiianOrPacificIslandCode = {
  /**
   * Native Hawaiian or Other Pacific Islander
   */
  "2076-8": "2076-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceHawaiianOrPacificIslandCode =
  typeof RaceHawaiianOrPacificIslandCode[keyof typeof RaceHawaiianOrPacificIslandCode];
