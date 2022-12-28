/**
 * A species of origin a substance raw material.
 * http://hl7.org/fhir/ValueSet/substance-source-material-species
 */
export const SourceMaterialSpeciesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SourceMaterialSpeciesCode =
  typeof SourceMaterialSpeciesCode[keyof typeof SourceMaterialSpeciesCode];
