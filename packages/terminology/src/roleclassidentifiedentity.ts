/**
 * Roles played by entities and scoped by entities that identify them for various purposes.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassIdentifiedEntity
 */
export const RoleClassIdentifiedEntityCode = {
  /**
   * identified entity
   */
  identifiedentity: "IDENT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassIdentifiedEntityCode =
  typeof RoleClassIdentifiedEntityCode[keyof typeof RoleClassIdentifiedEntityCode];
