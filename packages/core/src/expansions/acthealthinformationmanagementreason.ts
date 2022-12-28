/**
 * The rationale or purpose for an act relating to health information management, such as archiving information for the purpose of complying with an organization policy or jurisdictional law relating to data retention.
 * http://terminology.hl7.org/ValueSet/v3-ActHealthInformationManagementReason
 */
export const ActHealthInformationManagementReasonCode = {
  /**
   * ActHealthInformationManagementReason
   */
  _ActHealthInformationManagementReason:
    "_ActHealthInformationManagementReason",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActHealthInformationManagementReasonCode =
  typeof ActHealthInformationManagementReasonCode[keyof typeof ActHealthInformationManagementReasonCode];
