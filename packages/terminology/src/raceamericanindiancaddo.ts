/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCaddo
 */
export const RaceAmericanIndianCaddoCode = {
  /**
   * Caddo
   */
  "1041-3": "1041-3",

  /**
   * Oklahoma Cado
   */
  "1042-1": "1042-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCaddoCode =
  typeof RaceAmericanIndianCaddoCode[keyof typeof RaceAmericanIndianCaddoCode];
