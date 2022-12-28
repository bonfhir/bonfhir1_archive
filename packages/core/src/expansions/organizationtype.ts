/**
 * This example value set defines a set of codes that can be used to indicate a type of organization.
 * http://terminology.hl7.org/ValueSet/organization-type
 */
export const OrganizationTypeCode = {
  /**
   * Healthcare Provider
   */
  prov: "prov",

  /**
   * Hospital Department
   */
  dept: "dept",

  /**
   * Organizational team
   */
  team: "team",

  /**
   * Government
   */
  govt: "govt",

  /**
   * Insurance Company
   */
  ins: "ins",

  /**
   * Payer
   */
  pay: "pay",

  /**
   * Educational Institute
   */
  edu: "edu",

  /**
   * Religious Institution
   */
  reli: "reli",

  /**
   * Clinical Research Sponsor
   */
  crs: "crs",

  /**
   * Community Group
   */
  cg: "cg",

  /**
   * Non-Healthcare Business or Corporation
   */
  bus: "bus",

  /**
   * Other
   */
  other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrganizationTypeCode =
  typeof OrganizationTypeCode[keyof typeof OrganizationTypeCode];
