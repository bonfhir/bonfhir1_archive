/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianSeminole
 */
export const RaceAmericanIndianSeminoleCode = {
  /**
   * Seminole
   */
  Seminole: "1566-9",

  /**
   * Big Cypress
   */
  BigCypress: "1567-7",

  /**
   * Brighton
   */
  Brighton: "1568-5",

  /**
   * Florida Seminole
   */
  FloridaSeminole: "1569-3",

  /**
   * Hollywood Seminole
   */
  HollywoodSeminole: "1570-1",

  /**
   * Oklahoma Seminole
   */
  OklahomaSeminole: "1571-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianSeminoleCode =
  typeof RaceAmericanIndianSeminoleCode[keyof typeof RaceAmericanIndianSeminoleCode];
