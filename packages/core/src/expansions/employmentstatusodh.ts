/**
 * Concepts representing whether a person does or does not currently have a job or is not currently in the labor pool seeking employment.
 * http://terminology.hl7.org/ValueSet/v3-employmentStatusODH
 */
export const EmploymentStatusODHCode = {
  /**
   * Employed
   */
  Employed: "Employed",

  /**
   * Not In Labor Force
   */
  NotInLaborForce: "NotInLaborForce",

  /**
   * Unemployed
   */
  Unemployed: "Unemployed",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EmploymentStatusODHCode =
  typeof EmploymentStatusODHCode[keyof typeof EmploymentStatusODHCode];
