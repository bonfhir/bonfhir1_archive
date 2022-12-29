/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassMolecularPart
 */
export const RoleClassMolecularPartCode = {
  /**
   * active moiety
   */
  activemoiety: "ACTM",

  /**
   * part
   */
  part: "PART",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassMolecularPartCode =
  typeof RoleClassMolecularPartCode[keyof typeof RoleClassMolecularPartCode];
