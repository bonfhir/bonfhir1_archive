/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPonca
 */
export const RaceAmericanIndianPoncaCode = {
  /**
   * Ponca
   */
  Ponca: "1474-6",

  /**
   * Nebraska Ponca
   */
  NebraskaPonca: "1475-3",

  /**
   * Oklahoma Ponca
   */
  OklahomaPonca: "1476-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPoncaCode =
  typeof RaceAmericanIndianPoncaCode[keyof typeof RaceAmericanIndianPoncaCode];
