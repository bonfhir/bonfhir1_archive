/**
 * **Description:**A value set of role classCodes related to entity management.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassManagedEntity
 */
export const RoleClassManagedEntityCode = {
  /**
   * access
   */
  ACCESS: "ACCESS",

  /**
   * held entity
   */
  HLD: "HLD",

  /**
   * maintained entity
   */
  MNT: "MNT",

  /**
   * owned entity
   */
  OWN: "OWN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassManagedEntityCode =
  typeof RoleClassManagedEntityCode[keyof typeof RoleClassManagedEntityCode];
