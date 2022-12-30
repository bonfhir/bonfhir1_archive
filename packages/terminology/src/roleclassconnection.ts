/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassConnection
 */
export const RoleClassConnectionCode = {
  /**
   * connection
   */
  CONC: "CONC",

  /**
   * molecular bond
   */
  BOND: "BOND",

  /**
   * continuity
   */
  CONY: "CONY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassConnectionCode =
  typeof RoleClassConnectionCode[keyof typeof RoleClassConnectionCode];
