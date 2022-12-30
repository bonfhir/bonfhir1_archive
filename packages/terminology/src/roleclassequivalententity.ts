/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassEquivalentEntity
 */
export const RoleClassEquivalentEntityCode = {
  /**
   * equivalent entity
   */
  EQUIV: "EQUIV",

  /**
   * same
   */
  SAME: "SAME",

  /**
   * subsumed by
   */
  SUBY: "SUBY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassEquivalentEntityCode =
  typeof RoleClassEquivalentEntityCode[keyof typeof RoleClassEquivalentEntityCode];
