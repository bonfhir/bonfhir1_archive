/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianKiowa
 */
export const RaceAmericanIndianKiowaCode = {
  /**
   * Kiowa
   */
  "1309-4": "1309-4",

  /**
   * Oklahoma Kiowa
   */
  "1310-2": "1310-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianKiowaCode =
  typeof RaceAmericanIndianKiowaCode[keyof typeof RaceAmericanIndianKiowaCode];
