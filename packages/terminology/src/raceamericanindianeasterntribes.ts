/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianEasternTribes
 */
export const RaceAmericanIndianEasternTribesCode = {
  /**
   * Eastern Tribes
   */
  EasternTribes: "1233-6",

  /**
   * Attacapa
   */
  Attacapa: "1234-4",

  /**
   * Biloxi
   */
  Biloxi: "1235-1",

  /**
   * Georgetown
   */
  Georgetown: "1236-9",

  /**
   * Moor
   */
  Moor: "1237-7",

  /**
   * Nansemond
   */
  Nansemond: "1238-5",

  /**
   * Natchez
   */
  Natchez: "1239-3",

  /**
   * Nausu Waiwash
   */
  NausuWaiwash: "1240-1",

  /**
   * Nipmuc
   */
  Nipmuc: "1241-9",

  /**
   * Paugussett
   */
  Paugussett: "1242-7",

  /**
   * Pocomoke Acohonock
   */
  PocomokeAcohonock: "1243-5",

  /**
   * Southeastern Indians
   */
  SoutheasternIndians: "1244-3",

  /**
   * Susquehanock
   */
  Susquehanock: "1245-0",

  /**
   * Tunica Biloxi
   */
  TunicaBiloxi: "1246-8",

  /**
   * Waccamaw-Siousan
   */
  WaccamawSiousan: "1247-6",

  /**
   * Wicomico
   */
  Wicomico: "1248-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianEasternTribesCode =
  typeof RaceAmericanIndianEasternTribesCode[keyof typeof RaceAmericanIndianEasternTribesCode];
