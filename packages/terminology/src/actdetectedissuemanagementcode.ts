/**
 * Codes dealing with the management of Detected Issue observations
 * http://terminology.hl7.org/ValueSet/v3-ActDetectedIssueManagementCode
 */
export const ActDetectedIssueManagementCodeCode = {
  /**
   * ActAdministrativeDetectedIssueManagementCode
   */
  _ActAdministrativeDetectedIssueManagementCode:
    "_ActAdministrativeDetectedIssueManagementCode",

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

  /**
   * Therapy Appropriate
   */
  "1": "1",

  /**
   * Consulted Supplier
   */
  "19": "19",

  /**
   * Assessed Patient
   */
  "2": "2",

  /**
   * appropriate indication or diagnosis
   */
  "22": "22",

  /**
   * prior therapy documented
   */
  "23": "23",

  /**
   * Patient Explanation
   */
  "3": "3",

  /**
   * Consulted Other Source
   */
  "4": "4",

  /**
   * Consulted Prescriber
   */
  "5": "5",

  /**
   * Prescriber Declined Change
   */
  "6": "6",

  /**
   * Interacting Therapy No Longer Active/Planned
   */
  "7": "7",

  /**
   * Supply Appropriate
   */
  "14": "14",

  /**
   * Replacement
   */
  "15": "15",

  /**
   * Vacation Supply
   */
  "16": "16",

  /**
   * Weekend Supply
   */
  "17": "17",

  /**
   * Leave of Absence
   */
  "18": "18",

  /**
   * additional quantity on separate dispense
   */
  "20": "20",

  /**
   * Other Action Taken
   */
  "8": "8",

  /**
   * Provided Patient Education
   */
  "10": "10",

  /**
   * Added Concurrent Therapy
   */
  "11": "11",

  /**
   * Temporarily Suspended Concurrent Therapy
   */
  "12": "12",

  /**
   * Stopped Concurrent Therapy
   */
  "13": "13",

  /**
   * Instituted Ongoing Monitoring Program
   */
  "9": "9",

  /**
   * ActFinancialDetectedIssueManagementCode
   */
  _ActFinancialDetectedIssueManagementCode:
    "_ActFinancialDetectedIssueManagementCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActDetectedIssueManagementCodeCode =
  typeof ActDetectedIssueManagementCodeCode[keyof typeof ActDetectedIssueManagementCodeCode];
