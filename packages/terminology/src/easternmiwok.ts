/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EasternMiwok
 */
export const EasternMiwokCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EasternMiwokCode =
  typeof EasternMiwokCode[keyof typeof EasternMiwokCode];
