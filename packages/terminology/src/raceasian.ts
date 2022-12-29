/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAsian
 */
export const RaceAsianCode = {
  /**
   * Asian
   */
  Asian: "2028-9",

  /**
   * Asian Indian
   */
  AsianIndian: "2029-7",

  /**
   * Bangladeshi
   */
  Bangladeshi: "2030-5",

  /**
   * Bhutanese
   */
  Bhutanese: "2031-3",

  /**
   * Burmese
   */
  Burmese: "2032-1",

  /**
   * Cambodian
   */
  Cambodian: "2033-9",

  /**
   * Chinese
   */
  Chinese: "2034-7",

  /**
   * Taiwanese
   */
  Taiwanese: "2035-4",

  /**
   * Filipino
   */
  Filipino: "2036-2",

  /**
   * Hmong
   */
  Hmong: "2037-0",

  /**
   * Indonesian
   */
  Indonesian: "2038-8",

  /**
   * Japanese
   */
  Japanese: "2039-6",

  /**
   * Korean
   */
  Korean: "2040-4",

  /**
   * Laotian
   */
  Laotian: "2041-2",

  /**
   * Malaysian
   */
  Malaysian: "2042-0",

  /**
   * Okinawan
   */
  Okinawan: "2043-8",

  /**
   * Pakistani
   */
  Pakistani: "2044-6",

  /**
   * Sri Lankan
   */
  SriLankan: "2045-3",

  /**
   * Thai
   */
  Thai: "2046-1",

  /**
   * Vietnamese
   */
  Vietnamese: "2047-9",

  /**
   * Iwo Jiman
   */
  IwoJiman: "2048-7",

  /**
   * Maldivian
   */
  Maldivian: "2049-5",

  /**
   * Nepalese
   */
  Nepalese: "2050-3",

  /**
   * Singaporean
   */
  Singaporean: "2051-1",

  /**
   * Madagascar
   */
  Madagascar: "2052-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAsianCode = typeof RaceAsianCode[keyof typeof RaceAsianCode];
