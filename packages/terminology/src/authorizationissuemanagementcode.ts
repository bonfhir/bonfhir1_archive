/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-AuthorizationIssueManagementCode
 */
export const AuthorizationIssueManagementCodeCode = {
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
export type AuthorizationIssueManagementCodeCode =
  typeof AuthorizationIssueManagementCodeCode[keyof typeof AuthorizationIssueManagementCodeCode];
