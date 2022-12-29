/**
 * Value Set of codes that specify the reliability of patient/person identifying data transmitted via a transaction.
 * http://terminology.hl7.org/ValueSet/v2-0445
 */
export const Hl7VSIdentityReliabilityCodeCode = {
  /**
   * Unknown/Default Social Security Number
   */
  UnknownDefaultSocialSecurityNumber: "US",

  /**
   * Unknown/Default Date of Birth
   */
  UnknownDefaultDateofBirth: "UD",

  /**
   * Unknown/Default Address
   */
  UnknownDefaultAddress: "UA",

  /**
   * Patient/Person Name is an Alias
   */
  PatientPersonNameisanAlias: "AL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSIdentityReliabilityCodeCode =
  typeof Hl7VSIdentityReliabilityCodeCode[keyof typeof Hl7VSIdentityReliabilityCodeCode];
