/**
 * These are moods describing activities as they progress in the business cycle, from defined, through planned and ordered to completed.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodCompletionTrack
 */
export const ActMoodCompletionTrackCode = {
  /**
   * potential
   */
  potential: "_ActMoodPotential",

  /**
   * definition
   */
  definition: "DEF",

  /**
   * permission
   */
  permission: "PERM",

  /**
   * resource slot
   */
  resourceslot: "SLOT",

  /**
   * event (occurrence)
   */
  eventoccurrence: "EVN",

  /**
   * intent
   */
  intent: "INT",

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

  /**
   * promise
   */
  promise: "PRMS",

  /**
   * appointment
   */
  appointment: "APT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodCompletionTrackCode =
  typeof ActMoodCompletionTrackCode[keyof typeof ActMoodCompletionTrackCode];
