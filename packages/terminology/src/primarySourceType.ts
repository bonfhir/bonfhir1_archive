/**
 * Type of the validation primary source
 * http://terminology.hl7.org/ValueSet/verificationresult-primary-source-type
 */
export const Primary_source_typeCode = {
  /**
   * License Board
   */
  LicenseBoard: "lic-board",

  /**
   * Primary Education
   */
  PrimaryEducation: "prim",

  /**
   * Continuing Education
   */
  ContinuingEducation: "cont-ed",

  /**
   * Postal Service
   */
  PostalService: "post-serv",

  /**
   * Relationship owner
   */
  Relationshipowner: "rel-own",

  /**
   * Registration Authority
   */
  RegistrationAuthority: "reg-auth",

  /**
   * Legal source
   */
  Legalsource: "legal",

  /**
   * Issuing source
   */
  Issuingsource: "issuer",

  /**
   * Authoritative source
   */
  Authoritativesource: "auth-source",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Primary_source_typeCode =
  typeof Primary_source_typeCode[keyof typeof Primary_source_typeCode];
