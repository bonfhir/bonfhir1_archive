/**
 * Code representing the role the entity played in the audit event.
 * http://terminology.hl7.org/ValueSet/object-role
 */
export const AuditEventEntityRoleCode = {
  /**
   * Patient
   */
  "1": "1",

  /**
   * Location
   */
  "2": "2",

  /**
   * Report
   */
  "3": "3",

  /**
   * Domain Resource
   */
  "4": "4",

  /**
   * Master file
   */
  "5": "5",

  /**
   * User
   */
  "6": "6",

  /**
   * List
   */
  "7": "7",

  /**
   * Doctor
   */
  "8": "8",

  /**
   * Subscriber
   */
  "9": "9",

  /**
   * Guarantor
   */
  "10": "10",

  /**
   * Security User Entity
   */
  "11": "11",

  /**
   * Security User Group
   */
  "12": "12",

  /**
   * Security Resource
   */
  "13": "13",

  /**
   * Security Granularity Definition
   */
  "14": "14",

  /**
   * Practitioner
   */
  "15": "15",

  /**
   * Data Destination
   */
  "16": "16",

  /**
   * Data Repository
   */
  "17": "17",

  /**
   * Schedule
   */
  "18": "18",

  /**
   * Customer
   */
  "19": "19",

  /**
   * Job
   */
  "20": "20",

  /**
   * Job Stream
   */
  "21": "21",

  /**
   * Table
   */
  "22": "22",

  /**
   * Routing Criteria
   */
  "23": "23",

  /**
   * Query
   */
  "24": "24",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventEntityRoleCode =
  typeof AuditEventEntityRoleCode[keyof typeof AuditEventEntityRoleCode];
