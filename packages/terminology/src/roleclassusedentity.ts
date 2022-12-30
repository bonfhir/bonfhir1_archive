/**
 * **Description:**An entity (player) that is used by another entity (scoper)
 * http://terminology.hl7.org/ValueSet/v3-RoleClassUsedEntity
 */
export const RoleClassUsedEntityCode = {
  /**
   * used entity
   */
  USED: "USED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassUsedEntityCode =
  typeof RoleClassUsedEntityCode[keyof typeof RoleClassUsedEntityCode];
