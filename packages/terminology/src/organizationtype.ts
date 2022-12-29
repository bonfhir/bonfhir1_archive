/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 * http://terminology.hl7.org/ValueSet/organization-type
 */
export const OrganizationTypeCode = {
  /**
   * Healthcare Provider
   */
  HealthcareProvider: "prov",

  /**
   * Hospital Department
   */
  HospitalDepartment: "dept",

  /**
   * Organizational team
   */
  Organizationalteam: "team",

  /**
   * Government
   */
  Government: "govt",

  /**
   * Insurance Company
   */
  InsuranceCompany: "ins",

  /**
   * Payer
   */
  Payer: "pay",

  /**
   * Educational Institute
   */
  EducationalInstitute: "edu",

  /**
   * Religious Institution
   */
  ReligiousInstitution: "reli",

  /**
   * Clinical Research Sponsor
   */
  ClinicalResearchSponsor: "crs",

  /**
   * Community Group
   */
  CommunityGroup: "cg",

  /**
   * Non-Healthcare Business or Corporation
   */
  NonHealthcareBusinessorCorporation: "bus",

  /**
   * Other
   */
  Other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrganizationTypeCode =
  typeof OrganizationTypeCode[keyof typeof OrganizationTypeCode];
