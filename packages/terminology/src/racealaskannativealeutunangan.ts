/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanNativeAleutUnangan
 */
export const RaceAlaskanNativeAleutUnanganCode = {
  /**
   * Unangan Aleut
   */
  UnanganAleut: "2006-5",

  /**
   * Akutan
   */
  Akutan: "2007-3",

  /**
   * Aleut Corporation
   */
  AleutCorporation: "2008-1",

  /**
   * Aleutian
   */
  Aleutian: "2009-9",

  /**
   * Aleutian Islander
   */
  AleutianIslander: "2010-7",

  /**
   * Atka
   */
  Atka: "2011-5",

  /**
   * Belkofski
   */
  Belkofski: "2012-3",

  /**
   * Chignik Lagoon
   */
  ChignikLagoon: "2013-1",

  /**
   * King Cove
   */
  KingCove: "2014-9",

  /**
   * False Pass
   */
  FalsePass: "2015-6",

  /**
   * Nelson Lagoon
   */
  NelsonLagoon: "2016-4",

  /**
   * Nikolski
   */
  Nikolski: "2017-2",

  /**
   * Pauloff Harbor
   */
  PauloffHarbor: "2018-0",

  /**
   * Qagan Toyagungin
   */
  QaganToyagungin: "2019-8",

  /**
   * Qawalangin
   */
  Qawalangin: "2020-6",

  /**
   * St. George
   */
  StGeorge: "2021-4",

  /**
   * St. Paul
   */
  StPaul: "2022-2",

  /**
   * Sand Point
   */
  SandPoint: "2023-0",

  /**
   * South Naknek
   */
  SouthNaknek: "2024-8",

  /**
   * Unalaska
   */
  Unalaska: "2025-5",

  /**
   * Unga
   */
  Unga: "2026-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanNativeAleutUnanganCode =
  typeof RaceAlaskanNativeAleutUnanganCode[keyof typeof RaceAlaskanNativeAleutUnanganCode];
