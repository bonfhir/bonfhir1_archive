/**
 * An Entity (player) for which someone (scoper) is granted by law the right to call the material (player) his own. This entitles the scoper to make decisions about the disposition of that material.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassOwnedEntity
 */
export const RoleClassOwnedEntityCode = {
  /**
   * owned entity
   */
  ownedentity: "OWN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassOwnedEntityCode =
  typeof RoleClassOwnedEntityCode[keyof typeof RoleClassOwnedEntityCode];
