/**
 * A role type that is used to further qualify an entity playing a role where the role class attribute is set to RoleClassCommissioningParty.
 * http://terminology.hl7.org/ValueSet/v3-AdministrativeContactRoleType
 */
export const AdministrativeContactRoleTypeCode = {
  /**
   * Billing Contact
   */
  BILL: "BILL",

  /**
   * organizational contact
   */
  ORG: "ORG",

  /**
   * Payor Contact
   */
  PAYOR: "PAYOR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdministrativeContactRoleTypeCode =
  typeof AdministrativeContactRoleTypeCode[keyof typeof AdministrativeContactRoleTypeCode];
