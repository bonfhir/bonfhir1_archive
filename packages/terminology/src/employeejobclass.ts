/**
 * A code qualifying the employment in various ways, such as, full-time vs. part time, etc.
 * http://terminology.hl7.org/ValueSet/v3-EmployeeJobClass
 */
export const EmployeeJobClassCode = {
  /**
   * full-time
   */
  FT: "FT",

  /**
   * part-time
   */
  PT: "PT",

  /**
   * EmployeeOccupationCode
   */
  _EmployeeOccupationCode: "_EmployeeOccupationCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EmployeeJobClassCode =
  typeof EmployeeJobClassCode[keyof typeof EmployeeJobClassCode];
