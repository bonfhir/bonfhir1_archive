/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianSacFox
 */
export const RaceAmericanIndianSacFoxCode = {
  /**
   * Sac and Fox
   */
  SacandFox: "1551-1",

  /**
   * Iowa Sac and Fox
   */
  IowaSacandFox: "1552-9",

  /**
   * Missouri Sac and Fox
   */
  MissouriSacandFox: "1553-7",

  /**
   * Oklahoma Sac and Fox
   */
  OklahomaSacandFox: "1554-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianSacFoxCode =
  typeof RaceAmericanIndianSacFoxCode[keyof typeof RaceAmericanIndianSacFoxCode];
