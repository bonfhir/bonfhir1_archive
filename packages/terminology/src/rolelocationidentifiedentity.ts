/**
 * **Description:**Describes types of identifiers other than the primary location registry identifier for a service delivery location. Identifiers may be assigned by a local service delivery organization, a formal body capable of accrediting the location for the capability to provide specific services or the identifier may be assigned at a jurisdictional level.
 * http://terminology.hl7.org/ValueSet/v3-RoleLocationIdentifiedEntity
 */
export const RoleLocationIdentifiedEntityCode = {
  /**
   * LocationIdentifiedEntityRoleCode
   */
  _LocationIdentifiedEntityRoleCode: "_LocationIdentifiedEntityRoleCode",

  /**
   * accreditation location identifier
   */
  ACHFID: "ACHFID",

  /**
   * jurisdiction location identifier
   */
  JURID: "JURID",

  /**
   * local location identifier
   */
  LOCHFID: "LOCHFID",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLocationIdentifiedEntityCode =
  typeof RoleLocationIdentifiedEntityCode[keyof typeof RoleLocationIdentifiedEntityCode];
