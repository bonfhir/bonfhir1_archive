/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RacePacificIslandPolynesian
 */
export const RacePacificIslandPolynesianCode = {
  /**
   * Polynesian
   */
  "2078-4": "2078-4",

  /**
   * Native Hawaiian
   */
  "2079-2": "2079-2",

  /**
   * Samoan
   */
  "2080-0": "2080-0",

  /**
   * Tahitian
   */
  "2081-8": "2081-8",

  /**
   * Tongan
   */
  "2082-6": "2082-6",

  /**
   * Tokelauan
   */
  "2083-4": "2083-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RacePacificIslandPolynesianCode =
  typeof RacePacificIslandPolynesianCode[keyof typeof RacePacificIslandPolynesianCode];
