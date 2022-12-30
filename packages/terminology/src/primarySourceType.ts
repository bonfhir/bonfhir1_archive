/**
 * Type of the validation primary source
 * http://terminology.hl7.org/ValueSet/verificationresult-primary-source-type
 */
export const Primary_source_typeCode = {
  /**
   * License Board
   */
  "lic-board": "lic-board",

  /**
   * Primary Education
   */
  prim: "prim",

  /**
   * Continuing Education
   */
  "cont-ed": "cont-ed",

  /**
   * Postal Service
   */
  "post-serv": "post-serv",

  /**
   * Relationship owner
   */
  "rel-own": "rel-own",

  /**
   * Registration Authority
   */
  "reg-auth": "reg-auth",

  /**
   * Legal source
   */
  legal: "legal",

  /**
   * Issuing source
   */
  issuer: "issuer",

  /**
   * Authoritative source
   */
  "auth-source": "auth-source",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Primary_source_typeCode =
  typeof Primary_source_typeCode[keyof typeof Primary_source_typeCode];
