/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNativeAleutKoniag
 */
export const RaceAlaskanNativeAleutKoniagCode = {
  /**
   * Koniag Aleut
   */
  KoniagAleut: "1992-7",

  /**
   * Akhiok
   */
  Akhiok: "1993-5",

  /**
   * Agdaagux
   */
  Agdaagux: "1994-3",

  /**
   * Karluk
   */
  Karluk: "1995-0",

  /**
   * Kodiak
   */
  Kodiak: "1996-8",

  /**
   * Larsen Bay
   */
  LarsenBay: "1997-6",

  /**
   * Old Harbor
   */
  OldHarbor: "1998-4",

  /**
   * Ouzinkie
   */
  Ouzinkie: "1999-2",

  /**
   * Port Lions
   */
  PortLions: "2000-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeAleutKoniagCode =
  typeof RaceAlaskanNativeAleutKoniagCode[keyof typeof RaceAlaskanNativeAleutKoniagCode];
