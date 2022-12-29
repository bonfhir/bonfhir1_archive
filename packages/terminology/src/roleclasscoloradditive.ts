/**
 * A substance (player) influencing the optical aspect of material (scoper).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassColorAdditive
 */
export const RoleClassColorAdditiveCode = {
  /**
   * color additive
   */
  coloradditive: "COLR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassColorAdditiveCode =
  typeof RoleClassColorAdditiveCode[keyof typeof RoleClassColorAdditiveCode];
