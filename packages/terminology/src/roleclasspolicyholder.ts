/**
 * A role played by a person or organization that holds an insurance policy. The underwriter of that policy is the scoping entity.

*Discussion:*The identifier of the policy is captured in 'Role.id' when the Role is a policy holder.

A particular policy may cover several individuals one of whom may be, but need not be, the policy holder. Thus the notion of covered party is a role that is distinct from that of the policy holder.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPolicyHolder
 */
export const RoleClassPolicyHolderCode = {
  /**
   * policy holder
   */
  policyholder: "POLHOLD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPolicyHolderCode =
  typeof RoleClassPolicyHolderCode[keyof typeof RoleClassPolicyHolderCode];
