/**
 * The role of an organization or individual designated to receive payment for a claim against a particular coverage. The scoping entity is the organization that is the submitter of the invoice in question.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPayee
 */
export const RoleClassPayeeCode = {
  /**
   * payee
   */
  payee: "PAYEE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPayeeCode =
  typeof RoleClassPayeeCode[keyof typeof RoleClassPayeeCode];
