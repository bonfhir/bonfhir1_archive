/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPomo
 */
export const RaceAmericanIndianPomoCode = {
  /**
   * Pomo
   */
  Pomo: "1464-7",

  /**
   * Central Pomo
   */
  CentralPomo: "1465-4",

  /**
   * Dry Creek
   */
  DryCreek: "1466-2",

  /**
   * Eastern Pomo
   */
  EasternPomo: "1467-0",

  /**
   * Kashia
   */
  Kashia: "1468-8",

  /**
   * Northern Pomo
   */
  NorthernPomo: "1469-6",

  /**
   * Scotts Valley
   */
  ScottsValley: "1470-4",

  /**
   * Stonyford
   */
  Stonyford: "1471-2",

  /**
   * Sulphur Bank
   */
  SulphurBank: "1472-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPomoCode =
  typeof RaceAmericanIndianPomoCode[keyof typeof RaceAmericanIndianPomoCode];
