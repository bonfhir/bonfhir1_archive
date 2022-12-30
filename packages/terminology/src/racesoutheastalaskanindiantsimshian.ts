/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceSoutheastAlaskanIndianTsimshian
 */
export const RaceSoutheastAlaskanIndianTsimshianCode = {
  /**
   * Tsimshian
   */
  "1837-4": "1837-4",

  /**
   * Metlakatla
   */
  "1838-2": "1838-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceSoutheastAlaskanIndianTsimshianCode =
  typeof RaceSoutheastAlaskanIndianTsimshianCode[keyof typeof RaceSoutheastAlaskanIndianTsimshianCode];
