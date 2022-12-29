/**
 * Guardian of a ward
 * http://terminology.hl7.org/ValueSet/v3-RoleClassGuardian
 */
export const RoleClassGuardianCode = {
  /**
   * guardian
   */
  guardian: "GUARD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassGuardianCode =
  typeof RoleClassGuardianCode[keyof typeof RoleClassGuardianCode];
