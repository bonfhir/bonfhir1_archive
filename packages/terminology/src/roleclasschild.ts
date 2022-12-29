/**
 * The player of the role is a child of the scoping entity, in a generic sense.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassChild
 */
export const RoleClassChildCode = {
  /**
   * child
   */
  child: "CHILD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassChildCode =
  typeof RoleClassChildCode[keyof typeof RoleClassChildCode];
