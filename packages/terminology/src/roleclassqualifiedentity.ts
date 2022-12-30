/**
 * An entity (player) that has been recognized as having certain training/experience or other characteristics that would make said entity an appropriate performer for a certain activity. The scoper is an organization that educates or qualifies entities.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassQualifiedEntity
 */
export const RoleClassQualifiedEntityCode = {
  /**
   * qualified entity
   */
  QUAL: "QUAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassQualifiedEntityCode =
  typeof RoleClassQualifiedEntityCode[keyof typeof RoleClassQualifiedEntityCode];
