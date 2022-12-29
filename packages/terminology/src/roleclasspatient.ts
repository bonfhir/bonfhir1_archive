/**
 * **Description:**A Role of a LivingSubject (player) as a recipient of health care services from a healthcare provider (scoper).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPatient
 */
export const RoleClassPatientCode = {
  /**
   * patient
   */
  patient: "PAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPatientCode =
  typeof RoleClassPatientCode[keyof typeof RoleClassPatientCode];
