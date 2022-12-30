/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActMoodActRequest
 */
export const ActMoodActRequestCode = {
  /**
   * act request
   */
  _ActMoodActRequest: "_ActMoodActRequest",

  /**
   * appointment request
   */
  ARQ: "ARQ",

  /**
   * permission request
   */
  PERMRQ: "PERMRQ",

  /**
   * request
   */
  RQO: "RQO",

  /**
   * request
   */
  ORD: "ORD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodActRequestCode =
  typeof ActMoodActRequestCode[keyof typeof ActMoodActRequestCode];
