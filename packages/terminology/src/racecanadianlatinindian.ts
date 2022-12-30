/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceCanadianLatinIndian
 */
export const RaceCanadianLatinIndianCode = {
  /**
   * Canadian and Latin American Indian
   */
  "1068-6": "1068-6",

  /**
   * Canadian Indian
   */
  "1069-4": "1069-4",

  /**
   * Central American Indian
   */
  "1070-2": "1070-2",

  /**
   * French American Indian
   */
  "1071-0": "1071-0",

  /**
   * Mexican American Indian
   */
  "1072-8": "1072-8",

  /**
   * South American Indian
   */
  "1073-6": "1073-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceCanadianLatinIndianCode =
  typeof RaceCanadianLatinIndianCode[keyof typeof RaceCanadianLatinIndianCode];
