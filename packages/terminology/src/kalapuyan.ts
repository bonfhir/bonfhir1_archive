/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Kalapuyan
 */
export const KalapuyanCode = {
  /**
   * Central Kalapuyan
   */
  CentralKalapuyan: "x-KAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KalapuyanCode = typeof KalapuyanCode[keyof typeof KalapuyanCode];
