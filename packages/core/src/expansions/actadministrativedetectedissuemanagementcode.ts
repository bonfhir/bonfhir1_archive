/**
 * Codes dealing with the management of Detected Issue observations for the administrative and patient administrative acts domains.
 * http://terminology.hl7.org/ValueSet/v3-ActAdministrativeDetectedIssueManagementCode
 */
export const ActAdministrativeDetectedIssueManagementCodeCode = {
  /**
   * Authorization Issue Management Code
   */
  _AuthorizationIssueManagementCode: "_AuthorizationIssueManagementCode",

  /**
   * emergency authorization override
   */
  EMAUTH: "EMAUTH",

  /**
   * authorization confirmed
   */
  "21": "21",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAdministrativeDetectedIssueManagementCodeCode =
  typeof ActAdministrativeDetectedIssueManagementCodeCode[keyof typeof ActAdministrativeDetectedIssueManagementCodeCode];
