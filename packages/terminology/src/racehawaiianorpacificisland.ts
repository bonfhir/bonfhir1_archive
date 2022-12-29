/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceHawaiianOrPacificIsland
 */
export const RaceHawaiianOrPacificIslandCode = {
  /**
   * Native Hawaiian or Other Pacific Islander
   */
  NativeHawaiianorOtherPacificIslander: "2076-8",

  /**
   * Polynesian
   */
  Polynesian: "2078-4",

  /**
   * Native Hawaiian
   */
  NativeHawaiian: "2079-2",

  /**
   * Samoan
   */
  Samoan: "2080-0",

  /**
   * Tahitian
   */
  Tahitian: "2081-8",

  /**
   * Tongan
   */
  Tongan: "2082-6",

  /**
   * Tokelauan
   */
  Tokelauan: "2083-4",

  /**
   * Micronesian
   */
  Micronesian: "2085-9",

  /**
   * Guamanian or Chamorro
   */
  GuamanianorChamorro: "2086-7",

  /**
   * Guamanian
   */
  Guamanian: "2087-5",

  /**
   * Chamorro
   */
  Chamorro: "2088-3",

  /**
   * Mariana Islander
   */
  MarianaIslander: "2089-1",

  /**
   * Marshallese
   */
  Marshallese: "2090-9",

  /**
   * Palauan
   */
  Palauan: "2091-7",

  /**
   * Carolinian
   */
  Carolinian: "2092-5",

  /**
   * Kosraean
   */
  Kosraean: "2093-3",

  /**
   * Pohnpeian
   */
  Pohnpeian: "2094-1",

  /**
   * Saipanese
   */
  Saipanese: "2095-8",

  /**
   * Kiribati
   */
  Kiribati: "2096-6",

  /**
   * Chuukese
   */
  Chuukese: "2097-4",

  /**
   * Yapese
   */
  Yapese: "2098-2",

  /**
   * Melanesian
   */
  Melanesian: "2100-6",

  /**
   * Fijian
   */
  Fijian: "2101-4",

  /**
   * Papua New Guinean
   */
  PapuaNewGuinean: "2102-2",

  /**
   * Solomon Islander
   */
  SolomonIslander: "2103-0",

  /**
   * New Hebrides
   */
  NewHebrides: "2104-8",

  /**
   * Other Pacific Islander
   */
  OtherPacificIslander: "2500-7",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceHawaiianOrPacificIslandCode =
  typeof RaceHawaiianOrPacificIslandCode[keyof typeof RaceHawaiianOrPacificIslandCode];
