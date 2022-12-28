/**
 * Value Set of codes that designate whether a guarantor is a full or part time student.
 * http://terminology.hl7.org/ValueSet/v2-0231
 */
export const Hl7VSStudentStatusCode = {
  /**
   * Full-time student
   */
  F: "F",

  /**
   * Part-time student
   */
  P: "P",

  /**
   * Not a student
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSStudentStatusCode =
  typeof Hl7VSStudentStatusCode[keyof typeof Hl7VSStudentStatusCode];
