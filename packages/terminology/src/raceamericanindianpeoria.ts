/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPeoria
 */
export const RaceAmericanIndianPeoriaCode = {
  /**
   * Peoria
   */
  Peoria: "1450-6",

  /**
   * Oklahoma Peoria
   */
  OklahomaPeoria: "1451-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPeoriaCode =
  typeof RaceAmericanIndianPeoriaCode[keyof typeof RaceAmericanIndianPeoriaCode];
