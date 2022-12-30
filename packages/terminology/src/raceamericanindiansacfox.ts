/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianSacFox
 */
export const RaceAmericanIndianSacFoxCode = {
  /**
   * Sac and Fox
   */
  "1551-1": "1551-1",

  /**
   * Iowa Sac and Fox
   */
  "1552-9": "1552-9",

  /**
   * Missouri Sac and Fox
   */
  "1553-7": "1553-7",

  /**
   * Oklahoma Sac and Fox
   */
  "1554-5": "1554-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianSacFoxCode =
  typeof RaceAmericanIndianSacFoxCode[keyof typeof RaceAmericanIndianSacFoxCode];
