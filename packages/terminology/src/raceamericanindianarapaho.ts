/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianArapaho
 */
export const RaceAmericanIndianArapahoCode = {
  /**
   * Arapaho
   */
  Arapaho: "1021-5",

  /**
   * Northern Arapaho
   */
  NorthernArapaho: "1022-3",

  /**
   * Southern Arapaho
   */
  SouthernArapaho: "1023-1",

  /**
   * Wind River Arapaho
   */
  WindRiverArapaho: "1024-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianArapahoCode =
  typeof RaceAmericanIndianArapahoCode[keyof typeof RaceAmericanIndianArapahoCode];
