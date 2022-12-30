/**
 * Further classifies entities of classCode ORG.
 * http://terminology.hl7.org/ValueSet/v3-OrganizationEntityType
 */
export const OrganizationEntityTypeCode = {
  /**
   * OrganizationEntityType
   */
  _OrganizationEntityType: "_OrganizationEntityType",

  /**
   * household
   */
  HHOLD: "HHOLD",

  /**
   * NationEntityType
   */
  NAT: "NAT",

  /**
   * religious institution
   */
  RELIG: "RELIG",

  /**
   * Individual Case Safety Report Sender Type
   */
  _IndividualCaseSafetyReportSenderType:
    "_IndividualCaseSafetyReportSenderType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrganizationEntityTypeCode =
  typeof OrganizationEntityTypeCode[keyof typeof OrganizationEntityTypeCode];
