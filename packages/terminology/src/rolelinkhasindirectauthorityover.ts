/**
 * The source Role has indirect authority over the target role in a chain of authority.
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkHasIndirectAuthorityOver
 */
export const RoleLinkHasIndirectAuthorityOverCode = {
  /**
   * has indirect authority over
   */
  INDAUTH: "INDAUTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkHasIndirectAuthorityOverCode =
  typeof RoleLinkHasIndirectAuthorityOverCode[keyof typeof RoleLinkHasIndirectAuthorityOverCode];
