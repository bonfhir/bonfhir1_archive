/**
 * Value Set of codes specifying the role of the physician ("self-employed" or "employed").
 * http://terminology.hl7.org/ValueSet/v2-0882
 */
export const Hl7VSMedicalRoleExecutingPhysicianCode = {
  /**
   * Employed
   */
  Employed: "E",

  /**
   * Self-employed
   */
  Selfemployed: "SE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMedicalRoleExecutingPhysicianCode =
  typeof Hl7VSMedicalRoleExecutingPhysicianCode[keyof typeof Hl7VSMedicalRoleExecutingPhysicianCode];
