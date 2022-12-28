/**
 * Player of the Affiliate role has a business/professional relationship with scoper. Player and scoper may be persons or organization. The Affiliate relationship does not imply membership in a group, nor does it exist for resource scheduling purposes.

*Example:* A healthcare provider is affiliated with another provider as a business associate.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAffiliate
 */
export const RoleClassAffiliateCode = {
  /**
   * affiliate
   */
  AFFL: "AFFL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAffiliateCode =
  typeof RoleClassAffiliateCode[keyof typeof RoleClassAffiliateCode];
