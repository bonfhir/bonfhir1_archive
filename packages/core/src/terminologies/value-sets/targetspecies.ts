/**
 * A species for which a medicinal product is intended.
 * http://hl7.org/fhir/ValueSet/target-species
 */
export const TargetSpeciesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TargetSpeciesCode =
  typeof TargetSpeciesCode[keyof typeof TargetSpeciesCode];
