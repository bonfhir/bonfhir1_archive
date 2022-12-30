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
  _ActMoodCompletionTrack: "_ActMoodCompletionTrack",

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

  /**
   * ActMoodPredicate
   */
  _ActMoodPredicate: "_ActMoodPredicate",

  /**
   * criterion
   */
  CRT: "CRT",

  /**
   * event criterion
   */
  "EVN.CRT": "EVN.CRT",

  /**
   * goal criterion
   */
  "GOL.CRT": "GOL.CRT",

  /**
   * intent criterion
   */
  "INT.CRT": "INT.CRT",

  /**
   * promise criterion
   */
  "PRMS.CRT": "PRMS.CRT",

  /**
   * request criterion
   */
  "RQO.CRT": "RQO.CRT",

  /**
   * risk criterion
   */
  "RSK.CRT": "RSK.CRT",

  /**
   * expectation
   */
  EXPEC: "EXPEC",

  /**
   * Goal
   */
  GOL: "GOL",

  /**
   * risk
   */
  RSK: "RSK",

  /**
   * option
   */
  OPT: "OPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodCode = typeof ActMoodCode[keyof typeof ActMoodCode];
