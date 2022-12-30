/**
 * The source Role has direct authority over the target role in a chain of authority.
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkHasDirectAuthorityOver
 */
export const RoleLinkHasDirectAuthorityOverCode = {
  /**
   * has direct authority over
   */
  DIRAUTH: "DIRAUTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkHasDirectAuthorityOverCode =
  typeof RoleLinkHasDirectAuthorityOverCode[keyof typeof RoleLinkHasDirectAuthorityOverCode];
