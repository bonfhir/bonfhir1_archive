/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianShoshone
 */
export const RaceAmericanIndianShoshoneCode = {
  /**
   * Shoshone
   */
  Shoshone: "1586-7",

  /**
   * Battle Mountain
   */
  BattleMountain: "1587-5",

  /**
   * Duckwater
   */
  Duckwater: "1588-3",

  /**
   * Elko
   */
  Elko: "1589-1",

  /**
   * Ely
   */
  Ely: "1590-9",

  /**
   * Goshute
   */
  Goshute: "1591-7",

  /**
   * Panamint
   */
  Panamint: "1592-5",

  /**
   * Ruby Valley
   */
  RubyValley: "1593-3",

  /**
   * Skull Valley
   */
  SkullValley: "1594-1",

  /**
   * South Fork Shoshone
   */
  SouthForkShoshone: "1595-8",

  /**
   * Te-Moak Western Shoshone
   */
  TeMoakWesternShoshone: "1596-6",

  /**
   * Timbi-Sha Shoshone
   */
  TimbiShaShoshone: "1597-4",

  /**
   * Washakie
   */
  Washakie: "1598-2",

  /**
   * Wind River Shoshone
   */
  WindRiverShoshone: "1599-0",

  /**
   * Yomba
   */
  Yomba: "1600-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianShoshoneCode =
  typeof RaceAmericanIndianShoshoneCode[keyof typeof RaceAmericanIndianShoshoneCode];
