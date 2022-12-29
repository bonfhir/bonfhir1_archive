/**
 * A stabilizer (player) added to a mixture (scoper) in order to prevent the molecular disintegration of the main substance.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassStabilizer
 */
export const RoleClassStabilizerCode = {
  /**
   * stabilizer
   */
  stabilizer: "STBL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassStabilizerCode =
  typeof RoleClassStabilizerCode[keyof typeof RoleClassStabilizerCode];
