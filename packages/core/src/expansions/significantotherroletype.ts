/**
 * A person who is important to one's well being; especially a spouse or one in a similar relationship. (The player is the one who is important)
 * http://terminology.hl7.org/ValueSet/v3-SignificantOtherRoleType
 */
export const SignificantOtherRoleTypeCode = {
  /**
   * significant other
   */
  SIGOTHR: "SIGOTHR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SignificantOtherRoleTypeCode =
  typeof SignificantOtherRoleTypeCode[keyof typeof SignificantOtherRoleTypeCode];
