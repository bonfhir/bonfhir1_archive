/**
 * A role in which the playing entity (material) provides access to another entity. The principal use case is intravenous (or other bodily) access lines that preexist and need to be referred to for medication routing instructions.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAccess
 */
export const RoleClassAccessCode = {
  /**
   * access
   */
  ACCESS: "ACCESS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAccessCode =
  typeof RoleClassAccessCode[keyof typeof RoleClassAccessCode];
