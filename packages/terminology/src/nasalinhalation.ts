/**
 * Inhalation, nasal
 * http://terminology.hl7.org/ValueSet/v3-NasalInhalation
 */
export const NasalInhalationCode = {
  /**
   * Inhalation, nasal
   */
  NASINHL: "NASINHL",

  /**
   * Inhalation, nasal cannula
   */
  NASINHLC: "NASINHLC",

  /**
   * Inhalation, nasal cannula
   */
  NP: "NP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NasalInhalationCode =
  typeof NasalInhalationCode[keyof typeof NasalInhalationCode];
