/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EasternMiwok
 */
export const EasternMiwokCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EasternMiwokCode =
  typeof EasternMiwokCode[keyof typeof EasternMiwokCode];
