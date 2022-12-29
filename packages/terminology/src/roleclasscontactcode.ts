/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassContactCode
 */
export const RoleClassContactCodeCode = {
  /**
   * emergency contact
   */
  emergencycontact: "ECON",

  /**
   * next of kin
   */
  nextofkin: "NOK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassContactCodeCode =
  typeof RoleClassContactCodeCode[keyof typeof RoleClassContactCodeCode];
