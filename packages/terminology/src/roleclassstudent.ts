/**
 * A role played by an individual who is a student of a school, which is the scoping entity.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassStudent
 */
export const RoleClassStudentCode = {
  /**
   * student
   */
  STD: "STD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassStudentCode =
  typeof RoleClassStudentCode[keyof typeof RoleClassStudentCode];
