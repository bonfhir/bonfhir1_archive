/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceCanadianLatinIndian
 */
export const RaceCanadianLatinIndianCode = {
  /**
   * Canadian and Latin American Indian
   */
  CanadianandLatinAmericanIndian: "1068-6",

  /**
   * Canadian Indian
   */
  CanadianIndian: "1069-4",

  /**
   * Central American Indian
   */
  CentralAmericanIndian: "1070-2",

  /**
   * French American Indian
   */
  FrenchAmericanIndian: "1071-0",

  /**
   * Mexican American Indian
   */
  MexicanAmericanIndian: "1072-8",

  /**
   * South American Indian
   */
  SouthAmericanIndian: "1073-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceCanadianLatinIndianCode =
  typeof RaceCanadianLatinIndianCode[keyof typeof RaceCanadianLatinIndianCode];
