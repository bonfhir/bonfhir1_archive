/**
 * **Definition:**Indicates why the requested authorization to prescribe or dispense a medication has been refused.
 * http://terminology.hl7.org/ValueSet/v3-SubstanceAdministrationPermissionRefusalReasonCode
 */
export const SubstanceAdministrationPermissionRefusalReasonCodeCode = {
  /**
   * SubstanceAdministrationPermissionRefusalReasonCode
   */
  _SubstanceAdministrationPermissionRefusalReasonCode:
    "_SubstanceAdministrationPermissionRefusalReasonCode",

  /**
   * no user permission
   */
  NOUSERPERM: "NOUSERPERM",

  /**
   * patient not eligible
   */
  PATINELIG: "PATINELIG",

  /**
   * protocol not met
   */
  PROTUNMET: "PROTUNMET",

  /**
   * provider not authorized
   */
  PROVUNAUTH: "PROVUNAUTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceAdministrationPermissionRefusalReasonCodeCode =
  typeof SubstanceAdministrationPermissionRefusalReasonCodeCode[keyof typeof SubstanceAdministrationPermissionRefusalReasonCodeCode];
