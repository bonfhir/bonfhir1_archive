/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianShoshonePaiute
 */
export const RaceAmericanIndianShoshonePaiuteCode = {
  /**
   * Shoshone Paiute
   */
  "1602-2": "1602-2",

  /**
   * Duck Valley
   */
  "1603-0": "1603-0",

  /**
   * Fallon
   */
  "1604-8": "1604-8",

  /**
   * Fort McDermitt
   */
  "1605-5": "1605-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianShoshonePaiuteCode =
  typeof RaceAmericanIndianShoshonePaiuteCode[keyof typeof RaceAmericanIndianShoshonePaiuteCode];
