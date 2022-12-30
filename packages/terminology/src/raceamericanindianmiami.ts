/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianMiami
 */
export const RaceAmericanIndianMiamiCode = {
  /**
   * Miami
   */
  "1358-1": "1358-1",

  /**
   * Illinois Miami
   */
  "1359-9": "1359-9",

  /**
   * Indiana Miami
   */
  "1360-7": "1360-7",

  /**
   * Oklahoma Miami
   */
  "1361-5": "1361-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianMiamiCode =
  typeof RaceAmericanIndianMiamiCode[keyof typeof RaceAmericanIndianMiamiCode];
