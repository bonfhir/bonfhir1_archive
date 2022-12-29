/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianNavajo
 */
export const RaceAmericanIndianNavajoCode = {
  /**
   * Navajo
   */
  Navajo: "1382-1",

  /**
   * Alamo Navajo
   */
  AlamoNavajo: "1383-9",

  /**
   * Canoncito Navajo
   */
  CanoncitoNavajo: "1384-7",

  /**
   * Ramah Navajo
   */
  RamahNavajo: "1385-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianNavajoCode =
  typeof RaceAmericanIndianNavajoCode[keyof typeof RaceAmericanIndianNavajoCode];
