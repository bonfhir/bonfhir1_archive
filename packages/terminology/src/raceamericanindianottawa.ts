/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianOttawa
 */
export const RaceAmericanIndianOttawaCode = {
  /**
   * Ottawa
   */
  Ottawa: "1411-8",

  /**
   * Burt Lake Ottawa
   */
  BurtLakeOttawa: "1412-6",

  /**
   * Michigan Ottawa
   */
  MichiganOttawa: "1413-4",

  /**
   * Oklahoma Ottawa
   */
  OklahomaOttawa: "1414-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianOttawaCode =
  typeof RaceAmericanIndianOttawaCode[keyof typeof RaceAmericanIndianOttawaCode];
