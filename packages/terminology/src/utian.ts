/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Utian
 */
export const UtianCode = {
  /**
   * Miwokan
   */
  Miwokan: "_Miwokan",

  /**
   * EasternMiwok
   */
  EasternMiwok: "_EasternMiwok",

  /**
   * Central Sierra Miwok
   */
  CentralSierraMiwok: "x-CSM",

  /**
   * Northern Sierra Miwok
   */
  NorthernSierraMiwok: "x-NSQ",

  /**
   * Plains Miwok
   */
  PlainsMiwok: "x-PMW",

  /**
   * Southern Sierra Miwok
   */
  SouthernSierraMiwok: "x-SKD",

  /**
   * WesternMiwok
   */
  WesternMiwok: "_WesternMiwok",

  /**
   * Coast Miwok
   */
  CoastMiwok: "x-CSI",

  /**
   * Lake Miwok
   */
  LakeMiwok: "x-LMW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UtianCode = typeof UtianCode[keyof typeof UtianCode];
