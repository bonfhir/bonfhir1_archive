/**
 * Value Set of codes specifying the account role of the physician, for example, only billing for the professional part, the technical part or both.
 * http://terminology.hl7.org/ValueSet/v2-0881
 */
export const Hl7VSRoleExecutingPhysicianCode = {
  /**
   * Technical Part
   */
  T: "T",

  /**
   * Professional Part
   */
  P: "P",

  /**
   * Both
   */
  B: "B",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRoleExecutingPhysicianCode =
  typeof Hl7VSRoleExecutingPhysicianCode[keyof typeof Hl7VSRoleExecutingPhysicianCode];
