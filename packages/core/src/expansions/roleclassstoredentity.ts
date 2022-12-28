/**
 * Relates an entity (player) (e.g. a device) to a location (scoper) at which it is normally found or stored when not used.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassStoredEntity
 */
export const RoleClassStoredEntityCode = {
  /**
   * stored entity
   */
  STOR: "STOR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassStoredEntityCode =
  typeof RoleClassStoredEntityCode[keyof typeof RoleClassStoredEntityCode];
