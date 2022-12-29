/**
 * A substance (player) added to a mixture (scoper) to make it taste a certain way. In food the use is obvious, in pharmaceuticals flavors can hide disgusting taste of the active ingredient (important in pediatric treatments).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassFlavorAdditive
 */
export const RoleClassFlavorAdditiveCode = {
  /**
   * flavor additive
   */
  flavoradditive: "FLVR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassFlavorAdditiveCode =
  typeof RoleClassFlavorAdditiveCode[keyof typeof RoleClassFlavorAdditiveCode];
