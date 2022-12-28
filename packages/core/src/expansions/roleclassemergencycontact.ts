/**
 * An entity to be contacted in the event of an emergency.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassEmergencyContact
 */
export const RoleClassEmergencyContactCode = {
  /**
   * emergency contact
   */
  ECON: "ECON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassEmergencyContactCode =
  typeof RoleClassEmergencyContactCode[keyof typeof RoleClassEmergencyContactCode];
