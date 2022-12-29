/**
 * A relationship between a person or organization and a person or organization formed for the purpose of exchanging work for compensation. The purpose of the role is to identify the type of relationship the employee has to the employer, rather than the nature of the work actually performed. (Contrast with AssignedEntity.)
 * http://terminology.hl7.org/ValueSet/v3-RoleClassEmployee
 */
export const RoleClassEmployeeCode = {
  /**
   * employee
   */
  employee: "EMP",

  /**
   * military person
   */
  militaryperson: "MIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassEmployeeCode =
  typeof RoleClassEmployeeCode[keyof typeof RoleClassEmployeeCode];
