/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RacePacificIslandMicronesian
 */
export const RacePacificIslandMicronesianCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RacePacificIslandMicronesianCode =
  typeof RacePacificIslandMicronesianCode[keyof typeof RacePacificIslandMicronesianCode];
