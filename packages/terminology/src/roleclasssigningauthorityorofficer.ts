/**
 * The role of a person (player) who is the officer or signature authority for of a scoping entity, usually an organization (scoper).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassSigningAuthorityOrOfficer
 */
export const RoleClassSigningAuthorityOrOfficerCode = {
  /**
   * signing authority or officer
   */
  signingauthorityorofficer: "SGNOFF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassSigningAuthorityOrOfficerCode =
  typeof RoleClassSigningAuthorityOrOfficerCode[keyof typeof RoleClassSigningAuthorityOrOfficerCode];
