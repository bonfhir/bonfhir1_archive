/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPeoria
 */
export const RaceAmericanIndianPeoriaCode = {
  /**
   * Peoria
   */
  "1450-6": "1450-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPeoriaCode =
  typeof RaceAmericanIndianPeoriaCode[keyof typeof RaceAmericanIndianPeoriaCode];
