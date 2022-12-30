/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPotawatomi
 */
export const RaceAmericanIndianPotawatomiCode = {
  /**
   * Potawatomi
   */
  "1478-7": "1478-7",

  /**
   * Citizen Band Potawatomi
   */
  "1479-5": "1479-5",

  /**
   * Forest County
   */
  "1480-3": "1480-3",

  /**
   * Hannahville
   */
  "1481-1": "1481-1",

  /**
   * Huron Potawatomi
   */
  "1482-9": "1482-9",

  /**
   * Pokagon Potawatomi
   */
  "1483-7": "1483-7",

  /**
   * Prairie Band
   */
  "1484-5": "1484-5",

  /**
   * Wisconsin Potawatomi
   */
  "1485-2": "1485-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPotawatomiCode =
  typeof RaceAmericanIndianPotawatomiCode[keyof typeof RaceAmericanIndianPotawatomiCode];
