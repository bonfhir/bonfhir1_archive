/**
 * Value Set of codes that describe an appointment status from the perspective of the entity assigned to fulfill the appointment.
 * http://terminology.hl7.org/ValueSet/v2-0278
 */
export const Hl7VSFillerStatusCodesCode = {
  /**
   * Blocked
   */
  BLOCKED: "BLOCKED",

  /**
   * Booked
   */
  BOOKED: "BOOKED",

  /**
   * Cancelled
   */
  CANCELLED: "CANCELLED",

  /**
   * Complete
   */
  COMPLETE: "COMPLETE",

  /**
   * Deleted
   */
  DELETED: "DELETED",

  /**
   * Overbook
   */
  OVERBOOK: "OVERBOOK",

  /**
   * Pending
   */
  PENDING: "PENDING",

  /**
   * Started
   */
  STARTED: "STARTED",

  /**
   * Waitlist
   */
  WAITLIST: "WAITLIST",

  /**
   * Pending
   */
  Pending: "Pending",

  /**
   * Waitlist
   */
  Waitlist: "Waitlist",

  /**
   * Booked
   */
  Booked: "Booked",

  /**
   * Started
   */
  Started: "Started",

  /**
   * Complete
   */
  Complete: "Complete",

  /**
   * Cancelled
   */
  Cancelled: "Cancelled",

  /**
   * Discontinued
   */
  DC: "DC",

  /**
   * Discontinued
   */
  Discontinued: "Discontinued",

  /**
   * Deleted
   */
  Deleted: "Deleted",

  /**
   * Blocked
   */
  Blocked: "Blocked",

  /**
   * Overbook
   */
  Overbook: "Overbook",

  /**
   * Noshow
   */
  Noshow: "Noshow",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSFillerStatusCodesCode =
  typeof Hl7VSFillerStatusCodesCode[keyof typeof Hl7VSFillerStatusCodesCode];
