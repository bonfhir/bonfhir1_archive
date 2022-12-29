/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActMoodDesire
 */
export const ActMoodDesireCode = {
  /**
   * desire
   */
  desire: "_ActMoodDesire",

  /**
   * act request
   */
  actrequest: "_ActMoodActRequest",

  /**
   * appointment request
   */
  appointmentrequest: "ARQ",

  /**
   * permission request
   */
  permissionrequest: "PERMRQ",

  /**
   * request
   */
  request: "RQO",

  /**
   * request
   */
  request: "ORD",

  /**
   * proposal
   */
  proposal: "PRP",

  /**
   * recommendation
   */
  recommendation: "RMD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodDesireCode =
  typeof ActMoodDesireCode[keyof typeof ActMoodDesireCode];
