/**
 * The "same" roleclass asserts an identity between playing and scoping entities: that they are in fact instances of the same entity and, in the case of discrepancies (e.g different DOB, gender), that one or both are in error.

*Usage:*

playing and scoping entities must have same classcode, but need not have identical attributes or values.

*Example:* 

a provider registry maintains sets of conflicting demographic data for what is reported to be the same individual.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassSame
 */
export const RoleClassSameCode = {
  /**
   * same
   */
  same: "SAME",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassSameCode =
  typeof RoleClassSameCode[keyof typeof RoleClassSameCode];
