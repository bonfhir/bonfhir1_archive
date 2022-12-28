/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassContinuity
 */
export const RoleClassContinuityCode = {
  /**
   * continuity
   */
  CONY: "CONY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassContinuityCode =
  typeof RoleClassContinuityCode[keyof typeof RoleClassContinuityCode];
