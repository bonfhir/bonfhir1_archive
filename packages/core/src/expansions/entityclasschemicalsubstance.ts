/**
 * A substance that is fully defined by an organic or inorganic chemical formula, includes mixtures of other chemical substances. Refine using, e.g., IUPAC codes.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassChemicalSubstance
 */
export const EntityClassChemicalSubstanceCode = {
  /**
   * chemical substance
   */
  CHEM: "CHEM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassChemicalSubstanceCode =
  typeof EntityClassChemicalSubstanceCode[keyof typeof EntityClassChemicalSubstanceCode];
