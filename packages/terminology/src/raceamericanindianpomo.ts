/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPomo
 */
export const RaceAmericanIndianPomoCode = {
  /**
   * Pomo
   */
  "1464-7": "1464-7",

  /**
   * Central Pomo
   */
  "1465-4": "1465-4",

  /**
   * Dry Creek
   */
  "1466-2": "1466-2",

  /**
   * Eastern Pomo
   */
  "1467-0": "1467-0",

  /**
   * Kashia
   */
  "1468-8": "1468-8",

  /**
   * Northern Pomo
   */
  "1469-6": "1469-6",

  /**
   * Scotts Valley
   */
  "1470-4": "1470-4",

  /**
   * Stonyford
   */
  "1471-2": "1471-2",

  /**
   * Sulphur Bank
   */
  "1472-0": "1472-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPomoCode =
  typeof RaceAmericanIndianPomoCode[keyof typeof RaceAmericanIndianPomoCode];
