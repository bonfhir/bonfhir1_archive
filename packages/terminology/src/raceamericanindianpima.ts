/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPima
 */
export const RaceAmericanIndianPimaCode = {
  /**
   * Pima
   */
  Pima: "1456-3",

  /**
   * Gila River Pima-Maricopa
   */
  GilaRiverPimaMaricopa: "1457-1",

  /**
   * Salt River Pima-Maricopa
   */
  SaltRiverPimaMaricopa: "1458-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPimaCode =
  typeof RaceAmericanIndianPimaCode[keyof typeof RaceAmericanIndianPimaCode];
