/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 * http://hl7.org/fhir/ValueSet/account-type
 */
export const AccountTypesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AccountTypesCode =
  typeof AccountTypesCode[keyof typeof AccountTypesCode];
