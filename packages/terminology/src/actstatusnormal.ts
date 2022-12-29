/**
 * Encompasses the expected states of an Act, but excludes "nullified" and "obsolete" which represent unusual terminal states for the life-cycle.
 * http://terminology.hl7.org/ValueSet/v3-ActStatusNormal
 */
export const ActStatusNormalCode = {
  /**
   * normal
   */
  normal: "normal",

  /**
   * aborted
   */
  aborted: "aborted",

  /**
   * active
   */
  active: "active",

  /**
   * cancelled
   */
  cancelled: "cancelled",

  /**
   * completed
   */
  completed: "completed",

  /**
   * held
   */
  held: "held",

  /**
   * new
   */
  new: "new",

  /**
   * suspended
   */
  suspended: "suspended",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusNormalCode =
  typeof ActStatusNormalCode[keyof typeof ActStatusNormalCode];
