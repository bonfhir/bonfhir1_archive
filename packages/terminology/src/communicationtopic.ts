/**
 * Codes describing the purpose or content of the communication.
 * http://terminology.hl7.org/ValueSet/communication-topic
 */
export const CommunicationTopicCode = {
  /**
   * Prescription Refill Request
   */
  PrescriptionRefillRequest: "prescription-refill-request",

  /**
   * Progress Update
   */
  ProgressUpdate: "progress-update",

  /**
   * Report Labs
   */
  ReportLabs: "report-labs",

  /**
   * Appointment Reminder
   */
  AppointmentReminder: "appointment-reminder",

  /**
   * Phone Consult
   */
  PhoneConsult: "phone-consult",

  /**
   * Summary Report
   */
  SummaryReport: "summary-report",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommunicationTopicCode =
  typeof CommunicationTopicCode[keyof typeof CommunicationTopicCode];
