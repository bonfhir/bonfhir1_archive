/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianNavajo
 */
export const RaceAmericanIndianNavajoCode = {
  /**
   * Navajo
   */
  "1382-1": "1382-1",

  /**
   * Alamo Navajo
   */
  "1383-9": "1383-9",

  /**
   * Canoncito Navajo
   */
  "1384-7": "1384-7",

  /**
   * Ramah Navajo
   */
  "1385-4": "1385-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianNavajoCode =
  typeof RaceAmericanIndianNavajoCode[keyof typeof RaceAmericanIndianNavajoCode];
