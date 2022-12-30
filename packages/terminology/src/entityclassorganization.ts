/**
 * A social or legal structure formed by human beings.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassOrganization
 */
export const EntityClassOrganizationCode = {
  /**
   * organization
   */
  ORG: "ORG",

  /**
   * public institution
   */
  PUB: "PUB",

  /**
   * state
   */
  STATE: "STATE",

  /**
   * Nation
   */
  NAT: "NAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassOrganizationCode =
  typeof EntityClassOrganizationCode[keyof typeof EntityClassOrganizationCode];
