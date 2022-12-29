/**
 * Further classifies entities of classCode ORG.
 * http://terminology.hl7.org/ValueSet/v3-OrganizationEntityType
 */
export const OrganizationEntityTypeCode = {
  /**
   * OrganizationEntityType
   */
  OrganizationEntityType: "_OrganizationEntityType",

  /**
   * household
   */
  household: "HHOLD",

  /**
   * NationEntityType
   */
  NationEntityType: "NAT",

  /**
   * religious institution
   */
  religiousinstitution: "RELIG",

  /**
   * Individual Case Safety Report Sender Type
   */
  IndividualCaseSafetyReportSenderType: "_IndividualCaseSafetyReportSenderType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrganizationEntityTypeCode =
  typeof OrganizationEntityTypeCode[keyof typeof OrganizationEntityTypeCode];
