/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCalifornia
 */
export const RaceAmericanIndianCaliforniaCode = {
  /**
   * California Tribes
   */
  "1053-8": "1053-8",

  /**
   * Cahto
   */
  "1054-6": "1054-6",

  /**
   * Chimariko
   */
  "1055-3": "1055-3",

  /**
   * Coast Miwok
   */
  "1056-1": "1056-1",

  /**
   * Digger
   */
  "1057-9": "1057-9",

  /**
   * Kawaiisu
   */
  "1058-7": "1058-7",

  /**
   * Kern River
   */
  "1059-5": "1059-5",

  /**
   * Mattole
   */
  "1060-3": "1060-3",

  /**
   * Red Wood
   */
  "1061-1": "1061-1",

  /**
   * Santa Rosa
   */
  "1062-9": "1062-9",

  /**
   * Takelma
   */
  "1063-7": "1063-7",

  /**
   * Wappo
   */
  "1064-5": "1064-5",

  /**
   * Yana
   */
  "1065-2": "1065-2",

  /**
   * Yuki
   */
  "1066-0": "1066-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCaliforniaCode =
  typeof RaceAmericanIndianCaliforniaCode[keyof typeof RaceAmericanIndianCaliforniaCode];
