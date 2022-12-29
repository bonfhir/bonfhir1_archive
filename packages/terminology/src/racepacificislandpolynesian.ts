/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RacePacificIslandPolynesian
 */
export const RacePacificIslandPolynesianCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RacePacificIslandPolynesianCode =
  typeof RacePacificIslandPolynesianCode[keyof typeof RacePacificIslandPolynesianCode];
