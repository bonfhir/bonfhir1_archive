/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianYuman
 */
export const RaceAmericanIndianYumanCode = {
  /**
   * Yuman
   */
  "1724-4": "1724-4",

  /**
   * Cocopah
   */
  "1725-1": "1725-1",

  /**
   * Havasupai
   */
  "1726-9": "1726-9",

  /**
   * Hualapai
   */
  "1727-7": "1727-7",

  /**
   * Maricopa
   */
  "1728-5": "1728-5",

  /**
   * Mohave
   */
  "1729-3": "1729-3",

  /**
   * Quechan
   */
  "1730-1": "1730-1",

  /**
   * Yavapai
   */
  "1731-9": "1731-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianYumanCode =
  typeof RaceAmericanIndianYumanCode[keyof typeof RaceAmericanIndianYumanCode];
