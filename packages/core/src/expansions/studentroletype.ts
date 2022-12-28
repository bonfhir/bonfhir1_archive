/**
 * Covered party to an insurance policy has coverage through full-time or part-time attendance at a recognized educational institution as defined by a particular insurance policy.
 * http://terminology.hl7.org/ValueSet/v3-StudentRoleType
 */
export const StudentRoleTypeCode = {
  /**
   * student
   */
  STUD: "STUD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StudentRoleTypeCode =
  typeof StudentRoleTypeCode[keyof typeof StudentRoleTypeCode];
