/**
 * **Definition:**Indicates why the requested authorization to prescribe or dispense a medication has been refused.
 * http://terminology.hl7.org/ValueSet/v3-SubstanceAdministrationPermissionRefusalReasonCode
 */
export const SubstanceAdministrationPermissionRefusalReasonCodeCode = {
  /**
   * SubstanceAdministrationPermissionRefusalReasonCode
   */
  SubstanceAdministrationPermissionRefusalReasonCode:
    "_SubstanceAdministrationPermissionRefusalReasonCode",

  /**
   * no user permission
   */
  nouserpermission: "NOUSERPERM",

  /**
   * patient not eligible
   */
  patientnoteligible: "PATINELIG",

  /**
   * protocol not met
   */
  protocolnotmet: "PROTUNMET",

  /**
   * provider not authorized
   */
  providernotauthorized: "PROVUNAUTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceAdministrationPermissionRefusalReasonCodeCode =
  typeof SubstanceAdministrationPermissionRefusalReasonCodeCode[keyof typeof SubstanceAdministrationPermissionRefusalReasonCodeCode];
