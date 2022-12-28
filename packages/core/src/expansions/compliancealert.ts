/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ComplianceAlert
 */
export const ComplianceAlertCode = {
  /**
   * Compliance Alert
   */
  COMPLY: "COMPLY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ComplianceAlertCode =
  typeof ComplianceAlertCode[keyof typeof ComplianceAlertCode];
