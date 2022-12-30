/**
 * A person responsible for the primary care of a patient at home.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassCaregiver
 */
export const RoleClassCaregiverCode = {
  /**
   * caregiver
   */
  CAREGIVER: "CAREGIVER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassCaregiverCode =
  typeof RoleClassCaregiverCode[keyof typeof RoleClassCaregiverCode];
