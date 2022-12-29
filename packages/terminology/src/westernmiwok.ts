/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-WesternMiwok
 */
export const WesternMiwokCode = {
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
export type WesternMiwokCode =
  typeof WesternMiwokCode[keyof typeof WesternMiwokCode];
