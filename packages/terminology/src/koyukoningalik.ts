/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-KoyukonIngalik
 */
export const KoyukonIngalikCode = {
  /**
   * Holikachuk
   */
  "x-HOI": "x-HOI",

  /**
   * Degexit'an
   */
  "x-ING": "x-ING",

  /**
   * Koyukon
   */
  "x-KOY": "x-KOY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KoyukonIngalikCode =
  typeof KoyukonIngalikCode[keyof typeof KoyukonIngalikCode];
