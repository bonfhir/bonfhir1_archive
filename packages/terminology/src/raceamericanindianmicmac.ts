/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianMicmac
 */
export const RaceAmericanIndianMicmacCode = {
  /**
   * Micmac
   */
  Micmac: "1365-6",

  /**
   * Aroostook
   */
  Aroostook: "1366-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianMicmacCode =
  typeof RaceAmericanIndianMicmacCode[keyof typeof RaceAmericanIndianMicmacCode];
