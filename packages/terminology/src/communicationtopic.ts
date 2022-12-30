/**
 * Codes describing the purpose or content of the communication.
 * http://terminology.hl7.org/ValueSet/communication-topic
 */
export const CommunicationTopicCode = {
  /**
   * Prescription Refill Request
   */
  "prescription-refill-request": "prescription-refill-request",

  /**
   * Progress Update
   */
  "progress-update": "progress-update",

  /**
   * Report Labs
   */
  "report-labs": "report-labs",

  /**
   * Appointment Reminder
   */
  "appointment-reminder": "appointment-reminder",

  /**
   * Phone Consult
   */
  "phone-consult": "phone-consult",

  /**
   * Summary Report
   */
  "summary-report": "summary-report",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommunicationTopicCode =
  typeof CommunicationTopicCode[keyof typeof CommunicationTopicCode];
