/**
 * An ingredient (player) that is added to a base (scoper), that amounts to a minor part of the overall mixture.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAdditive
 */
export const RoleClassAdditiveCode = {
  /**
   * additive
   */
  additive: "ADTV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAdditiveCode =
  typeof RoleClassAdditiveCode[keyof typeof RoleClassAdditiveCode];
