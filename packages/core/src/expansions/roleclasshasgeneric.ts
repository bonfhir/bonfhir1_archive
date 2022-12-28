/**
 * A special link between pharmaceuticals indicating that the target (scoper) is a generic for the source (player).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassHasGeneric
 */
export const RoleClassHasGenericCode = {
  /**
   * has generic
   */
  GRIC: "GRIC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassHasGenericCode =
  typeof RoleClassHasGenericCode[keyof typeof RoleClassHasGenericCode];
