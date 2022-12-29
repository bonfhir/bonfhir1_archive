/**
 * An entity (player) that is maintained by another entity (scoper). This is typical role held by durable equipment. The scoper assumes responsibility for proper operation, quality, and safety.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassMaintainedEntity
 */
export const RoleClassMaintainedEntityCode = {
  /**
   * maintained entity
   */
  maintainedentity: "MNT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassMaintainedEntityCode =
  typeof RoleClassMaintainedEntityCode[keyof typeof RoleClassMaintainedEntityCode];
