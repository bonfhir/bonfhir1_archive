/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Takelman
 */
export const TakelmanCode = {
  /**
   * Kalapuyan
   */
  Kalapuyan: "_Kalapuyan",

  /**
   * Central Kalapuyan
   */
  CentralKalapuyan: "x-KAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TakelmanCode = typeof TakelmanCode[keyof typeof TakelmanCode];
