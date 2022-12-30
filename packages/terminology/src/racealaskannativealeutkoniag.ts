/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNativeAleutKoniag
 */
export const RaceAlaskanNativeAleutKoniagCode = {
  /**
   * Koniag Aleut
   */
  "1992-7": "1992-7",

  /**
   * Akhiok
   */
  "1993-5": "1993-5",

  /**
   * Agdaagux
   */
  "1994-3": "1994-3",

  /**
   * Karluk
   */
  "1995-0": "1995-0",

  /**
   * Kodiak
   */
  "1996-8": "1996-8",

  /**
   * Larsen Bay
   */
  "1997-6": "1997-6",

  /**
   * Old Harbor
   */
  "1998-4": "1998-4",

  /**
   * Ouzinkie
   */
  "1999-2": "1999-2",

  /**
   * Port Lions
   */
  "2000-8": "2000-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeAleutKoniagCode =
  typeof RaceAlaskanNativeAleutKoniagCode[keyof typeof RaceAlaskanNativeAleutKoniagCode];
