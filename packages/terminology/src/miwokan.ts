/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Miwokan
 */
export const MiwokanCode = {
  /**
   * EasternMiwok
   */
  _EasternMiwok: "_EasternMiwok",

  /**
   * Central Sierra Miwok
   */
  "x-CSM": "x-CSM",

  /**
   * Northern Sierra Miwok
   */
  "x-NSQ": "x-NSQ",

  /**
   * Plains Miwok
   */
  "x-PMW": "x-PMW",

  /**
   * Southern Sierra Miwok
   */
  "x-SKD": "x-SKD",

  /**
   * WesternMiwok
   */
  _WesternMiwok: "_WesternMiwok",

  /**
   * Coast Miwok
   */
  "x-CSI": "x-CSI",

  /**
   * Lake Miwok
   */
  "x-LMW": "x-LMW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MiwokanCode = typeof MiwokanCode[keyof typeof MiwokanCode];
