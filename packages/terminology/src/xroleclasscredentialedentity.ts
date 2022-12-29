/**
 * A role played by an entity that receives credentials from the scoping entity.
 * http://terminology.hl7.org/ValueSet/v3-xRoleClassCredentialedEntity
 */
export const XRoleClassCredentialedEntityCode = {
  /**
   * assigned entity
   */
  assignedentity: "ASSIGNED",

  /**
   * qualified entity
   */
  qualifiedentity: "QUAL",

  /**
   * licensed entity
   */
  licensedentity: "LIC",

  /**
   * notary public
   */
  notarypublic: "NOT",

  /**
   * healthcare provider
   */
  healthcareprovider: "PROV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XRoleClassCredentialedEntityCode =
  typeof XRoleClassCredentialedEntityCode[keyof typeof XRoleClassCredentialedEntityCode];
