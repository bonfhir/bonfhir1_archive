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
  CitizenRoleType: "_CitizenRoleType",

  /**
   * asylum seeker
   */
  asylumseeker: "CAS",

  /**
   * single minor asylum seeker
   */
  singleminorasylumseeker: "CASM",

  /**
   * national
   */
  national: "CN",

  /**
   * non-country member without residence permit
   */
  noncountrymemberwithoutresidencepermit: "CNRP",

  /**
   * non-country member minor without residence permit
   */
  noncountrymemberminorwithoutresidencepermit: "CNRPM",

  /**
   * permit card applicant
   */
  permitcardapplicant: "CPCA",

  /**
   * non-country member with residence permit
   */
  noncountrymemberwithresidencepermit: "CRP",

  /**
   * non-country member minor with residence permit
   */
  noncountrymemberminorwithresidencepermit: "CRPM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitizenRoleTypeCode =
  typeof CitizenRoleTypeCode[keyof typeof CitizenRoleTypeCode];
