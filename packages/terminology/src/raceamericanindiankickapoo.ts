/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianKickapoo
 */
export const RaceAmericanIndianKickapooCode = {
  /**
   * Kickapoo
   */
  "1305-2": "1305-2",

  /**
   * Oklahoma Kickapoo
   */
  "1306-0": "1306-0",

  /**
   * Texas Kickapoo
   */
  "1307-8": "1307-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianKickapooCode =
  typeof RaceAmericanIndianKickapooCode[keyof typeof RaceAmericanIndianKickapooCode];
