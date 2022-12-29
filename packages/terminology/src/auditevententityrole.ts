/**
 * Code representing the role the entity played in the audit event.
 * http://terminology.hl7.org/ValueSet/object-role
 */
export const AuditEventEntityRoleCode = {
  /**
   * Patient
   */
  Patient: "1",

  /**
   * Location
   */
  Location: "2",

  /**
   * Report
   */
  Report: "3",

  /**
   * Domain Resource
   */
  DomainResource: "4",

  /**
   * Master file
   */
  Masterfile: "5",

  /**
   * User
   */
  User: "6",

  /**
   * List
   */
  List: "7",

  /**
   * Doctor
   */
  Doctor: "8",

  /**
   * Subscriber
   */
  Subscriber: "9",

  /**
   * Guarantor
   */
  Guarantor: "10",

  /**
   * Security User Entity
   */
  SecurityUserEntity: "11",

  /**
   * Security User Group
   */
  SecurityUserGroup: "12",

  /**
   * Security Resource
   */
  SecurityResource: "13",

  /**
   * Security Granularity Definition
   */
  SecurityGranularityDefinition: "14",

  /**
   * Practitioner
   */
  Practitioner: "15",

  /**
   * Data Destination
   */
  DataDestination: "16",

  /**
   * Data Repository
   */
  DataRepository: "17",

  /**
   * Schedule
   */
  Schedule: "18",

  /**
   * Customer
   */
  Customer: "19",

  /**
   * Job
   */
  Job: "20",

  /**
   * Job Stream
   */
  JobStream: "21",

  /**
   * Table
   */
  Table: "22",

  /**
   * Routing Criteria
   */
  RoutingCriteria: "23",

  /**
   * Query
   */
  Query: "24",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventEntityRoleCode =
  typeof AuditEventEntityRoleCode[keyof typeof AuditEventEntityRoleCode];
