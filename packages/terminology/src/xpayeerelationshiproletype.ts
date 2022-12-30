/**
 * The specification of the relationship to the covered party of the payee in the case when an insurer is not directly paying the healthcare provider (as payee) but reimbursing the party that did pay them.
 * http://terminology.hl7.org/ValueSet/v3-xPayeeRelationshipRoleType
 */
export const XPayeeRelationshipRoleTypeCode = {
  /**
   * Family Member
   */
  FM: "FM",

  /**
   * Guarantor
   */
  GT: "GT",

  /**
   * Policy Holder
   */
  PH: "PH",

  /**
   * Patient
   */
  PT: "PT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XPayeeRelationshipRoleTypeCode =
  typeof XPayeeRelationshipRoleTypeCode[keyof typeof XPayeeRelationshipRoleTypeCode];
