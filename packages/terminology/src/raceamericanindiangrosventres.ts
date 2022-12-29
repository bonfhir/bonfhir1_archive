/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianGrosVentres
 */
export const RaceAmericanIndianGrosVentresCode = {
  /**
   * Gros Ventres
   */
  GrosVentres: "1264-1",

  /**
   * Atsina
   */
  Atsina: "1265-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianGrosVentresCode =
  typeof RaceAmericanIndianGrosVentresCode[keyof typeof RaceAmericanIndianGrosVentresCode];
