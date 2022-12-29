/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPotawatomi
 */
export const RaceAmericanIndianPotawatomiCode = {
  /**
   * Potawatomi
   */
  Potawatomi: "1478-7",

  /**
   * Citizen Band Potawatomi
   */
  CitizenBandPotawatomi: "1479-5",

  /**
   * Forest County
   */
  ForestCounty: "1480-3",

  /**
   * Hannahville
   */
  Hannahville: "1481-1",

  /**
   * Huron Potawatomi
   */
  HuronPotawatomi: "1482-9",

  /**
   * Pokagon Potawatomi
   */
  PokagonPotawatomi: "1483-7",

  /**
   * Prairie Band
   */
  PrairieBand: "1484-5",

  /**
   * Wisconsin Potawatomi
   */
  WisconsinPotawatomi: "1485-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPotawatomiCode =
  typeof RaceAmericanIndianPotawatomiCode[keyof typeof RaceAmericanIndianPotawatomiCode];
