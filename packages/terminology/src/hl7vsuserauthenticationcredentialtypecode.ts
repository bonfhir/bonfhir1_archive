/**
 * Value Set of codes that specify a type of user authentication credential.
 * http://terminology.hl7.org/ValueSet/v2-0615
 */
export const Hl7VSUserAuthenticationCredentialTypeCodeCode = {
  /**
   * Kerberos Service Ticket
   */
  KERB: "KERB",

  /**
   * Authenticated User Identity Assertion
   */
  SAML: "SAML",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSUserAuthenticationCredentialTypeCodeCode =
  typeof Hl7VSUserAuthenticationCredentialTypeCodeCode[keyof typeof Hl7VSUserAuthenticationCredentialTypeCodeCode];
