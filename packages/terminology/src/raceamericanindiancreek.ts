/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCreek
 */
export const RaceAmericanIndianCreekCode = {
  /**
   * Creek
   */
  "1193-2": "1193-2",

  /**
   * Alabama Creek
   */
  "1194-0": "1194-0",

  /**
   * Alabama Quassarte
   */
  "1195-7": "1195-7",

  /**
   * Eastern Creek
   */
  "1196-5": "1196-5",

  /**
   * Eastern Muscogee
   */
  "1197-3": "1197-3",

  /**
   * Kialegee
   */
  "1198-1": "1198-1",

  /**
   * Lower Muscogee
   */
  "1199-9": "1199-9",

  /**
   * Machis Lower Creek Indian
   */
  "1200-5": "1200-5",

  /**
   * Poarch Band
   */
  "1201-3": "1201-3",

  /**
   * Principal Creek Indian Nation
   */
  "1202-1": "1202-1",

  /**
   * Star Clan of Muscogee Creeks
   */
  "1203-9": "1203-9",

  /**
   * Thlopthlocco
   */
  "1204-7": "1204-7",

  /**
   * Tuckabachee
   */
  "1205-4": "1205-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCreekCode =
  typeof RaceAmericanIndianCreekCode[keyof typeof RaceAmericanIndianCreekCode];
