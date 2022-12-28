/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceCanadianLatinIndian
 */
export const RaceCanadianLatinIndianCode = {
  /**
   * Canadian and Latin American Indian
   */
  "1068-6": "1068-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceCanadianLatinIndianCode =
  typeof RaceCanadianLatinIndianCode[keyof typeof RaceCanadianLatinIndianCode];
