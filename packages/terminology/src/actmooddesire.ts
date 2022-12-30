/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActMoodDesire
 */
export const ActMoodDesireCode = {
  /**
   * desire
   */
  _ActMoodDesire: "_ActMoodDesire",

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

  /**
   * proposal
   */
  PRP: "PRP",

  /**
   * recommendation
   */
  RMD: "RMD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodDesireCode =
  typeof ActMoodDesireCode[keyof typeof ActMoodDesireCode];
