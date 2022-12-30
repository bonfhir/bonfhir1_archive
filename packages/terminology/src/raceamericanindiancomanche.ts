/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianComanche
 */
export const RaceAmericanIndianComancheCode = {
  /**
   * Comanche
   */
  "1175-9": "1175-9",

  /**
   * Oklahoma Comanche
   */
  "1176-7": "1176-7",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianComancheCode =
  typeof RaceAmericanIndianComancheCode[keyof typeof RaceAmericanIndianComancheCode];
