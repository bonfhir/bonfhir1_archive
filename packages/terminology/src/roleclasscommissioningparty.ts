/**
 * An Entity that is authorized to issue or instantiate permissions, privileges, credentials or other formal/legal authorizations.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassCommissioningParty
 */
export const RoleClassCommissioningPartyCode = {
  /**
   * commissioning party
   */
  COMPAR: "COMPAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassCommissioningPartyCode =
  typeof RoleClassCommissioningPartyCode[keyof typeof RoleClassCommissioningPartyCode];
