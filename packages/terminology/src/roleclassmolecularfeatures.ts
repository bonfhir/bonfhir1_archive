/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassMolecularFeatures
 */
export const RoleClassMolecularFeaturesCode = {
  /**
   * molecular bond
   */
  molecularbond: "BOND",

  /**
   * part
   */
  part: "PART",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassMolecularFeaturesCode =
  typeof RoleClassMolecularFeaturesCode[keyof typeof RoleClassMolecularFeaturesCode];
