/**
 * **Description:**A value set of role classCodes related to entity management.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassManagedEntity
 */
export const RoleClassManagedEntityCode = {
  /**
   * access
   */
  access: "ACCESS",

  /**
   * held entity
   */
  heldentity: "HLD",

  /**
   * maintained entity
   */
  maintainedentity: "MNT",

  /**
   * owned entity
   */
  ownedentity: "OWN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassManagedEntityCode =
  typeof RoleClassManagedEntityCode[keyof typeof RoleClassManagedEntityCode];
