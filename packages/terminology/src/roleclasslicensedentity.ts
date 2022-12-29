/**
 * A relationship in which the scoper certifies the player ( e. g. a medical care giver, a medical device or a provider organization) to perform certain activities that fall under the jurisdiction of the scoper (e.g., a health authority licensing healthcare prlviders, a medical quality authority certifying healthcare professionals,)
 * http://terminology.hl7.org/ValueSet/v3-RoleClassLicensedEntity
 */
export const RoleClassLicensedEntityCode = {
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
export type RoleClassLicensedEntityCode =
  typeof RoleClassLicensedEntityCode[keyof typeof RoleClassLicensedEntityCode];
