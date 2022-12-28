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
   * ActMoodPredicate
   */
  _ActMoodPredicate: "_ActMoodPredicate",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodCode = typeof ActMoodCode[keyof typeof ActMoodCode];
