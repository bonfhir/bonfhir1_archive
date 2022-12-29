/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCoushatta
 */
export const RaceAmericanIndianCoushattaCode = {
  /**
   * Coushatta
   */
  Coushatta: "1186-6",

  /**
   * Alabama Coushatta
   */
  AlabamaCoushatta: "1187-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCoushattaCode =
  typeof RaceAmericanIndianCoushattaCode[keyof typeof RaceAmericanIndianCoushattaCode];
