/**
 * A code distinguishing whether an Act is conceived of as a factual statement or in some other manner as a command, possibility, goal, etc.

*Constraints:* An Act-instance must have one and only one moodCode value.

The moodCode of a single Act-instance never changes. Mood is not state.

To describe the progression of a business activity from defined to planned to executed, etc. one must instantiate different Act-instances in the different moods and link them using ActRelationship of general type "sequel". (See ActRelationship.type.)
 * http://terminology.hl7.org/ValueSet/v3-ActMood
 */
export const ActMoodCode = {
  /**
   * ActMoodCompletionTrack
   */
  ActMoodCompletionTrack: "_ActMoodCompletionTrack",

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

  /**
   * ActMoodPredicate
   */
  ActMoodPredicate: "_ActMoodPredicate",

  /**
   * criterion
   */
  criterion: "CRT",

  /**
   * event criterion
   */
  eventcriterion: "EVN.CRT",

  /**
   * goal criterion
   */
  goalcriterion: "GOL.CRT",

  /**
   * intent criterion
   */
  intentcriterion: "INT.CRT",

  /**
   * promise criterion
   */
  promisecriterion: "PRMS.CRT",

  /**
   * request criterion
   */
  requestcriterion: "RQO.CRT",

  /**
   * risk criterion
   */
  riskcriterion: "RSK.CRT",

  /**
   * expectation
   */
  expectation: "EXPEC",

  /**
   * Goal
   */
  Goal: "GOL",

  /**
   * risk
   */
  risk: "RSK",

  /**
   * option
   */
  option: "OPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodCode = typeof ActMoodCode[keyof typeof ActMoodCode];
