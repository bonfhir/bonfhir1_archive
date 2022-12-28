/**
 * Indicates whether the account is available to be used.
 * http://hl7.org/fhir/ValueSet/account-status
 */
export const AccountStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AccountStatusCode =
  typeof AccountStatusCode[keyof typeof AccountStatusCode];
