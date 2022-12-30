/**
 * A role type used to qualify a person's legal status within a country or nation.

**Examples:**

 *  Full citizen
 *  Asylum seeker
 *  Permit card holder
 * http://terminology.hl7.org/ValueSet/v3-CitizenRoleType
 */
export const CitizenRoleTypeCode = {
  /**
   * CitizenRoleType
   */
  _CitizenRoleType: "_CitizenRoleType",

  /**
   * asylum seeker
   */
  CAS: "CAS",

  /**
   * single minor asylum seeker
   */
  CASM: "CASM",

  /**
   * national
   */
  CN: "CN",

  /**
   * non-country member without residence permit
   */
  CNRP: "CNRP",

  /**
   * non-country member minor without residence permit
   */
  CNRPM: "CNRPM",

  /**
   * permit card applicant
   */
  CPCA: "CPCA",

  /**
   * non-country member with residence permit
   */
  CRP: "CRP",

  /**
   * non-country member minor with residence permit
   */
  CRPM: "CRPM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitizenRoleTypeCode =
  typeof CitizenRoleTypeCode[keyof typeof CitizenRoleTypeCode];
