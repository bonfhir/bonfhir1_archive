/**
 * The specification of the relationship of the Payee to the invoice. Can be used in cases when an insurer is not directly paying the healthcare provider (as payee) but reimbursing the party that paid the invoice/claim.
 * http://terminology.hl7.org/ValueSet/v3-xRoleClassPayeePolicyRelationship
 */
export const XRoleClassPayeePolicyRelationshipCode = {
  /**
   * covered party
   */
  coveredparty: "COVPTY",

  /**
   * guarantor
   */
  guarantor: "GUAR",

  /**
   * policy holder
   */
  policyholder: "POLHOLD",

  /**
   * healthcare provider
   */
  healthcareprovider: "PROV",

  /**
   * personal relationship
   */
  personalrelationship: "PRS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XRoleClassPayeePolicyRelationshipCode =
  typeof XRoleClassPayeePolicyRelationshipCode[keyof typeof XRoleClassPayeePolicyRelationshipCode];
