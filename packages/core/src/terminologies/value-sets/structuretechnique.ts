/**
 * The method used to elucidate the structure or characterization of the drug substance.
 * http://hl7.org/fhir/ValueSet/substance-structure-technique
 */
export const StructureTechniqueCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StructureTechniqueCode =
  typeof StructureTechniqueCode[keyof typeof StructureTechniqueCode];
