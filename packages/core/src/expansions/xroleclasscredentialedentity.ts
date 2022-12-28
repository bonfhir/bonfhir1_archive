/**
 * A role played by an entity that receives credentials from the scoping entity.
 * http://terminology.hl7.org/ValueSet/v3-xRoleClassCredentialedEntity
 */
export const XRoleClassCredentialedEntityCode = {
  /**
   * assigned entity
   */
  ASSIGNED: "ASSIGNED",

  /**
   * qualified entity
   */
  QUAL: "QUAL",

  /**
   * licensed entity
   */
  LIC: "LIC",

  /**
   * notary public
   */
  NOT: "NOT",

  /**
   * healthcare provider
   */
  PROV: "PROV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XRoleClassCredentialedEntityCode =
  typeof XRoleClassCredentialedEntityCode[keyof typeof XRoleClassCredentialedEntityCode];
