/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianYuman
 */
export const RaceAmericanIndianYumanCode = {
  /**
   * Yuman
   */
  Yuman: "1724-4",

  /**
   * Cocopah
   */
  Cocopah: "1725-1",

  /**
   * Havasupai
   */
  Havasupai: "1726-9",

  /**
   * Hualapai
   */
  Hualapai: "1727-7",

  /**
   * Maricopa
   */
  Maricopa: "1728-5",

  /**
   * Mohave
   */
  Mohave: "1729-3",

  /**
   * Quechan
   */
  Quechan: "1730-1",

  /**
   * Yavapai
   */
  Yavapai: "1731-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianYumanCode =
  typeof RaceAmericanIndianYumanCode[keyof typeof RaceAmericanIndianYumanCode];
