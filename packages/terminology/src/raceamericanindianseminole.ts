/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianSeminole
 */
export const RaceAmericanIndianSeminoleCode = {
  /**
   * Seminole
   */
  "1566-9": "1566-9",

  /**
   * Big Cypress
   */
  "1567-7": "1567-7",

  /**
   * Brighton
   */
  "1568-5": "1568-5",

  /**
   * Florida Seminole
   */
  "1569-3": "1569-3",

  /**
   * Hollywood Seminole
   */
  "1570-1": "1570-1",

  /**
   * Oklahoma Seminole
   */
  "1571-9": "1571-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianSeminoleCode =
  typeof RaceAmericanIndianSeminoleCode[keyof typeof RaceAmericanIndianSeminoleCode];
