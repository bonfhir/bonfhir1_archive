/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassConnection
 */
export const RoleClassConnectionCode = {
  /**
   * connection
   */
  connection: "CONC",

  /**
   * molecular bond
   */
  molecularbond: "BOND",

  /**
   * continuity
   */
  continuity: "CONY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassConnectionCode =
  typeof RoleClassConnectionCode[keyof typeof RoleClassConnectionCode];
