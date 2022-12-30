/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianHoopa
 */
export const RaceAmericanIndianHoopaCode = {
  /**
   * Hoopa
   */
  "1271-6": "1271-6",

  /**
   * Trinity
   */
  "1272-4": "1272-4",

  /**
   * Whilkut
   */
  "1273-2": "1273-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianHoopaCode =
  typeof RaceAmericanIndianHoopaCode[keyof typeof RaceAmericanIndianHoopaCode];
