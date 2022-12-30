/**
 * The specification of the relationship of the Payee to the invoice. Can be used in cases when an insurer is not directly paying the healthcare provider (as payee) but reimbursing the party that paid the invoice/claim.
 * http://terminology.hl7.org/ValueSet/v3-xRoleClassPayeePolicyRelationship
 */
export const XRoleClassPayeePolicyRelationshipCode = {
  /**
   * covered party
   */
  COVPTY: "COVPTY",

  /**
   * guarantor
   */
  GUAR: "GUAR",

  /**
   * policy holder
   */
  POLHOLD: "POLHOLD",

  /**
   * healthcare provider
   */
  PROV: "PROV",

  /**
   * personal relationship
   */
  PRS: "PRS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XRoleClassPayeePolicyRelationshipCode =
  typeof XRoleClassPayeePolicyRelationshipCode[keyof typeof XRoleClassPayeePolicyRelationshipCode];
