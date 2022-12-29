/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianHoopa
 */
export const RaceAmericanIndianHoopaCode = {
  /**
   * Hoopa
   */
  Hoopa: "1271-6",

  /**
   * Trinity
   */
  Trinity: "1272-4",

  /**
   * Whilkut
   */
  Whilkut: "1273-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianHoopaCode =
  typeof RaceAmericanIndianHoopaCode[keyof typeof RaceAmericanIndianHoopaCode];
