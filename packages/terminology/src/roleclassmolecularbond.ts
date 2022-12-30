/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassMolecularBond
 */
export const RoleClassMolecularBondCode = {
  /**
   * molecular bond
   */
  BOND: "BOND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassMolecularBondCode =
  typeof RoleClassMolecularBondCode[keyof typeof RoleClassMolecularBondCode];
