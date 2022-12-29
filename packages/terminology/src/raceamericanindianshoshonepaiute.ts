/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianShoshonePaiute
 */
export const RaceAmericanIndianShoshonePaiuteCode = {
  /**
   * Shoshone Paiute
   */
  ShoshonePaiute: "1602-2",

  /**
   * Duck Valley
   */
  DuckValley: "1603-0",

  /**
   * Fallon
   */
  Fallon: "1604-8",

  /**
   * Fort McDermitt
   */
  FortMcDermitt: "1605-5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianShoshonePaiuteCode =
  typeof RaceAmericanIndianShoshonePaiuteCode[keyof typeof RaceAmericanIndianShoshonePaiuteCode];
