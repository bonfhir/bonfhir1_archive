/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianWampanoag
 */
export const RaceAmericanIndianWampanoagCode = {
  /**
   * Wampanoag
   */
  Wampanoag: "1679-0",

  /**
   * Gay Head Wampanoag
   */
  GayHeadWampanoag: "1680-8",

  /**
   * Mashpee Wampanoag
   */
  MashpeeWampanoag: "1681-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianWampanoagCode =
  typeof RaceAmericanIndianWampanoagCode[keyof typeof RaceAmericanIndianWampanoagCode];
