/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RacePacificIslandMelanesian
 */
export const RacePacificIslandMelanesianCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RacePacificIslandMelanesianCode =
  typeof RacePacificIslandMelanesianCode[keyof typeof RacePacificIslandMelanesianCode];
