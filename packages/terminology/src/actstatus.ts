/**
 * Contains the names (codes) for each of the states in the state-machine of the RIM Act class.
 * http://terminology.hl7.org/ValueSet/v3-ActStatus
 */
export const ActStatusCode = {
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

  /**
   * nullified
   */
  nullified: "nullified",

  /**
   * obsolete
   */
  obsolete: "obsolete",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusCode = typeof ActStatusCode[keyof typeof ActStatusCode];
