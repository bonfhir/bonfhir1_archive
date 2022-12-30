/**
 * These are moods describing activities as they progress in the business cycle, from defined, through planned and ordered to completed.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodCompletionTrack
 */
export const ActMoodCompletionTrackCode = {
  /**
   * potential
   */
  _ActMoodPotential: "_ActMoodPotential",

  /**
   * definition
   */
  DEF: "DEF",

  /**
   * permission
   */
  PERM: "PERM",

  /**
   * resource slot
   */
  SLOT: "SLOT",

  /**
   * event (occurrence)
   */
  EVN: "EVN",

  /**
   * intent
   */
  INT: "INT",

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

  /**
   * promise
   */
  PRMS: "PRMS",

  /**
   * appointment
   */
  APT: "APT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodCompletionTrackCode =
  typeof ActMoodCompletionTrackCode[keyof typeof ActMoodCompletionTrackCode];
