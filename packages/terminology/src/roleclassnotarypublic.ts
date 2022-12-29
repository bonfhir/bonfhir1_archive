/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassNotaryPublic
 */
export const RoleClassNotaryPublicCode = {
  /**
   * notary public
   */
  notarypublic: "NOT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassNotaryPublicCode =
  typeof RoleClassNotaryPublicCode[keyof typeof RoleClassNotaryPublicCode];
