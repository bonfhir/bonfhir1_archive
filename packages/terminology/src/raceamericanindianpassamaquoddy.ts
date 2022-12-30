/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPassamaquoddy
 */
export const RaceAmericanIndianPassamaquoddyCode = {
  /**
   * Passamaquoddy
   */
  "1441-5": "1441-5",

  /**
   * Indian Township
   */
  "1442-3": "1442-3",

  /**
   * Pleasant Point Passamaquoddy
   */
  "1443-1": "1443-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPassamaquoddyCode =
  typeof RaceAmericanIndianPassamaquoddyCode[keyof typeof RaceAmericanIndianPassamaquoddyCode];
