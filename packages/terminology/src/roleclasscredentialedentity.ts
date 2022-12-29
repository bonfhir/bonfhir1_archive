/**
 * A role played by an entity that receives credentials from the scoping entity.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassCredentialedEntity
 */
export const RoleClassCredentialedEntityCode = {
  /**
   * credentialed entity
   */
  credentialedentity: "CRED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassCredentialedEntityCode =
  typeof RoleClassCredentialedEntityCode[keyof typeof RoleClassCredentialedEntityCode];
