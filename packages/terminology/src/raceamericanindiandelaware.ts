/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianDelaware
 */
export const RaceAmericanIndianDelawareCode = {
  /**
   * Delaware
   */
  "1214-6": "1214-6",

  /**
   * Eastern Delaware
   */
  "1215-3": "1215-3",

  /**
   * Lenni-Lenape
   */
  "1216-1": "1216-1",

  /**
   * Munsee
   */
  "1217-9": "1217-9",

  /**
   * Oklahoma Delaware
   */
  "1218-7": "1218-7",

  /**
   * Rampough Mountain
   */
  "1219-5": "1219-5",

  /**
   * Sand Hill
   */
  "1220-3": "1220-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianDelawareCode =
  typeof RaceAmericanIndianDelawareCode[keyof typeof RaceAmericanIndianDelawareCode];
