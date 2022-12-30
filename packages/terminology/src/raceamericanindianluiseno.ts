/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianLuiseno
 */
export const RaceAmericanIndianLuisenoCode = {
  /**
   * Luiseno
   */
  "1331-8": "1331-8",

  /**
   * La Jolla
   */
  "1332-6": "1332-6",

  /**
   * Pala
   */
  "1333-4": "1333-4",

  /**
   * Pauma
   */
  "1334-2": "1334-2",

  /**
   * Pechanga
   */
  "1335-9": "1335-9",

  /**
   * Soboba
   */
  "1336-7": "1336-7",

  /**
   * Twenty-Nine Palms
   */
  "1337-5": "1337-5",

  /**
   * Temecula
   */
  "1338-3": "1338-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianLuisenoCode =
  typeof RaceAmericanIndianLuisenoCode[keyof typeof RaceAmericanIndianLuisenoCode];
