/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCalifornia
 */
export const RaceAmericanIndianCaliforniaCode = {
  /**
   * California Tribes
   */
  CaliforniaTribes: "1053-8",

  /**
   * Cahto
   */
  Cahto: "1054-6",

  /**
   * Chimariko
   */
  Chimariko: "1055-3",

  /**
   * Coast Miwok
   */
  CoastMiwok: "1056-1",

  /**
   * Digger
   */
  Digger: "1057-9",

  /**
   * Kawaiisu
   */
  Kawaiisu: "1058-7",

  /**
   * Kern River
   */
  KernRiver: "1059-5",

  /**
   * Mattole
   */
  Mattole: "1060-3",

  /**
   * Red Wood
   */
  RedWood: "1061-1",

  /**
   * Santa Rosa
   */
  SantaRosa: "1062-9",

  /**
   * Takelma
   */
  Takelma: "1063-7",

  /**
   * Wappo
   */
  Wappo: "1064-5",

  /**
   * Yana
   */
  Yana: "1065-2",

  /**
   * Yuki
   */
  Yuki: "1066-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCaliforniaCode =
  typeof RaceAmericanIndianCaliforniaCode[keyof typeof RaceAmericanIndianCaliforniaCode];
