/**
 * Entity that is currently in the possession of a holder (scoper), who holds, or uses it, usually based on some agreement with the owner.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassHeldEntity
 */
export const RoleClassHeldEntityCode = {
  /**
   * held entity
   */
  HLD: "HLD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassHeldEntityCode =
  typeof RoleClassHeldEntityCode[keyof typeof RoleClassHeldEntityCode];
