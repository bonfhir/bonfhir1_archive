/**
 * A code specifying the meaning and purpose of every RoleLink instance. Each of its values implies specific constraints to what kinds of Role objects can be related and in which way.
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkType
 */
export const RoleLinkTypeCode = {
  /**
   * related
   */
  REL: "REL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkTypeCode =
  typeof RoleLinkTypeCode[keyof typeof RoleLinkTypeCode];
