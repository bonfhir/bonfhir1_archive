/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceSoutheastAlaskanIndian
 */
export const RaceSoutheastAlaskanIndianCode = {
  /**
   * Southeast Alaska
   */
  SoutheastAlaska: "1811-9",

  /**
   * Tlingit-Haida
   */
  TlingitHaida: "1813-5",

  /**
   * Angoon
   */
  Angoon: "1814-3",

  /**
   * Central Council of Tlingit and Haida Tribes
   */
  CentralCouncilofTlingitandHaidaTribes: "1815-0",

  /**
   * Chilkat
   */
  Chilkat: "1816-8",

  /**
   * Chilkoot
   */
  Chilkoot: "1817-6",

  /**
   * Craig
   */
  Craig: "1818-4",

  /**
   * Douglas
   */
  Douglas: "1819-2",

  /**
   * Haida
   */
  Haida: "1820-0",

  /**
   * Hoonah
   */
  Hoonah: "1821-8",

  /**
   * Hydaburg
   */
  Hydaburg: "1822-6",

  /**
   * Kake
   */
  Kake: "1823-4",

  /**
   * Kasaan
   */
  Kasaan: "1824-2",

  /**
   * Kenaitze
   */
  Kenaitze: "1825-9",

  /**
   * Ketchikan
   */
  Ketchikan: "1826-7",

  /**
   * Klawock
   */
  Klawock: "1827-5",

  /**
   * Pelican
   */
  Pelican: "1828-3",

  /**
   * Petersburg
   */
  Petersburg: "1829-1",

  /**
   * Saxman
   */
  Saxman: "1830-9",

  /**
   * Sitka
   */
  Sitka: "1831-7",

  /**
   * Tenakee Springs
   */
  TenakeeSprings: "1832-5",

  /**
   * Tlingit
   */
  Tlingit: "1833-3",

  /**
   * Wrangell
   */
  Wrangell: "1834-1",

  /**
   * Yakutat
   */
  Yakutat: "1835-8",

  /**
   * Tsimshian
   */
  Tsimshian: "1837-4",

  /**
   * Metlakatla
   */
  Metlakatla: "1838-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceSoutheastAlaskanIndianCode =
  typeof RaceSoutheastAlaskanIndianCode[keyof typeof RaceSoutheastAlaskanIndianCode];
