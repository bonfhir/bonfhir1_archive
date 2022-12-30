/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPima
 */
export const RaceAmericanIndianPimaCode = {
  /**
   * Pima
   */
  "1456-3": "1456-3",

  /**
   * Gila River Pima-Maricopa
   */
  "1457-1": "1457-1",

  /**
   * Salt River Pima-Maricopa
   */
  "1458-9": "1458-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPimaCode =
  typeof RaceAmericanIndianPimaCode[keyof typeof RaceAmericanIndianPimaCode];
