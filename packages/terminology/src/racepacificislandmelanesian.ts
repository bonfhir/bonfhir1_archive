/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RacePacificIslandMelanesian
 */
export const RacePacificIslandMelanesianCode = {
  /**
   * Melanesian
   */
  "2100-6": "2100-6",

  /**
   * Fijian
   */
  "2101-4": "2101-4",

  /**
   * Papua New Guinean
   */
  "2102-2": "2102-2",

  /**
   * Solomon Islander
   */
  "2103-0": "2103-0",

  /**
   * New Hebrides
   */
  "2104-8": "2104-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RacePacificIslandMelanesianCode =
  typeof RacePacificIslandMelanesianCode[keyof typeof RacePacificIslandMelanesianCode];
