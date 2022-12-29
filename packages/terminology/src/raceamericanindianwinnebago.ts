/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianWinnebago
 */
export const RaceAmericanIndianWinnebagoCode = {
  /**
   * Winnebago
   */
  Winnebago: "1696-4",

  /**
   * Ho-chunk
   */
  Hochunk: "1697-2",

  /**
   * Nebraska Winnebago
   */
  NebraskaWinnebago: "1698-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianWinnebagoCode =
  typeof RaceAmericanIndianWinnebagoCode[keyof typeof RaceAmericanIndianWinnebagoCode];
