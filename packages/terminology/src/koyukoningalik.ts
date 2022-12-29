/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-KoyukonIngalik
 */
export const KoyukonIngalikCode = {
  /**
   * Holikachuk
   */
  Holikachuk: "x-HOI",

  /**
   * Degexit'an
   */
  Degexitan: "x-ING",

  /**
   * Koyukon
   */
  Koyukon: "x-KOY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KoyukonIngalikCode =
  typeof KoyukonIngalikCode[keyof typeof KoyukonIngalikCode];
