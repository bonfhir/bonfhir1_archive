/**
 * Relates an entity (player) to a location (scoper) at which it is present in some way. This presence may be limited in time.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassLocatedEntity
 */
export const RoleClassLocatedEntityCode = {
  /**
   * located entity
   */
  LOCE: "LOCE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassLocatedEntityCode =
  typeof RoleClassLocatedEntityCode[keyof typeof RoleClassLocatedEntityCode];
