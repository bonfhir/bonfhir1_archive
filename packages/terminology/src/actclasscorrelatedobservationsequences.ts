/**
 * Container for Observation Sequences (Observations whose values are contained in LIST<>'s) having values correlated with each other. Each contained Observation Sequence LIST<> must be the same length. Values in the LIST<>'s are correlated based on index. E.g. the values in position 2 in all the LIST<>'s are correlated. This is analogous to a table where each column is an Observation Sequence with a LIST<> of values, and each row in the table is a correlation between the columns. For example, a 12-lead ECG would contain 13 sequences: one sequence for time, and a sequence for each of the 12 leads.
 * http://terminology.hl7.org/ValueSet/v3-ActClassCorrelatedObservationSequences
 */
export const ActClassCorrelatedObservationSequencesCode = {
  /**
   * correlated observation sequences
   */
  correlatedobservationsequences: "OBSCOR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassCorrelatedObservationSequencesCode =
  typeof ActClassCorrelatedObservationSequencesCode[keyof typeof ActClassCorrelatedObservationSequencesCode];
