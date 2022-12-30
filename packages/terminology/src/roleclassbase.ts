/**
 * A base ingredient (player) is what comprises the major part of a mixture (scoper). E.g., Water in most i.v. solutions, or Vaseline in salves. Among all ingredients of a material, there should be only one base. A base substance can, in turn, be a mixture.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassBase
 */
export const RoleClassBaseCode = {
  /**
   * base
   */
  BASE: "BASE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassBaseCode =
  typeof RoleClassBaseCode[keyof typeof RoleClassBaseCode];
