/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianLuiseno
 */
export const RaceAmericanIndianLuisenoCode = {
  /**
   * Luiseno
   */
  Luiseno: "1331-8",

  /**
   * La Jolla
   */
  LaJolla: "1332-6",

  /**
   * Pala
   */
  Pala: "1333-4",

  /**
   * Pauma
   */
  Pauma: "1334-2",

  /**
   * Pechanga
   */
  Pechanga: "1335-9",

  /**
   * Soboba
   */
  Soboba: "1336-7",

  /**
   * Twenty-Nine Palms
   */
  TwentyNinePalms: "1337-5",

  /**
   * Temecula
   */
  Temecula: "1338-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianLuisenoCode =
  typeof RaceAmericanIndianLuisenoCode[keyof typeof RaceAmericanIndianLuisenoCode];
