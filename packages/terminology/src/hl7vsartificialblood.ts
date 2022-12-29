/**
 * Value Set of codes that identify the artificial blood identifier associated with the specimen.
 * http://terminology.hl7.org/ValueSet/v2-0375
 */
export const Hl7VSArtificialBloodCode = {
  /**
   * Stromal free hemoglobin preparations
   */
  Stromalfreehemoglobinpreparations: "SFHB",

  /**
   * Fluorocarbons
   */
  Fluorocarbons: "FLUR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSArtificialBloodCode =
  typeof Hl7VSArtificialBloodCode[keyof typeof Hl7VSArtificialBloodCode];
