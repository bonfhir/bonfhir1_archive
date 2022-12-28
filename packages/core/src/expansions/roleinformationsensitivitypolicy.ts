/**
 * RoleSensitivity codes are used to bind information to a Role.confidentialityCode per organizational policy. Role.confidentialityCode is defined in the RIM as "an indication of the appropriate disclosure of information about this Role with respect to the playing Entity."
 * http://terminology.hl7.org/ValueSet/v3-RoleInformationSensitivityPolicy
 */
export const RoleInformationSensitivityPolicyCode = {
  /**
   * RoleInformationSensitivityPolicy
   */
  _RoleInformationSensitivityPolicy: "_RoleInformationSensitivityPolicy",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleInformationSensitivityPolicyCode =
  typeof RoleInformationSensitivityPolicyCode[keyof typeof RoleInformationSensitivityPolicyCode];
